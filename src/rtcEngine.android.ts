import { clientRoleProperty, RtcEngineCommon } from "./rtcEngine.common";
import { Application } from "tns-core-modules";
import { AreaCode, ClientRole } from "./Enums";

/**
 * const engine = rtcEngine.create(...)
 * engine.role =
 */

// export class RtcView {

//     engine: RtcEngine;
//     viewType: "remote" | "local";
//     uid: number;
//     nativeView: any;


//     createNativeView() {
//         // return new SurfaceView();
//     }

//     set viewType() {
//         if (this.engine && this.uid) {
            
//         }
//         this.setupView();
//     }

//     private setupView() {
//         if (this.engine && this.viewType) {
//             if(this.viewType === "remote") {
//                 this.engine.engine.setupRemoteVideo(new io.agora.rtc.video.VideoCanvas(this.nativeView, io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN, this.uid));
//             }
//         }
//     }
// }
/**
 * DefaultAgoraCallComponent
 * <GridLayout [rows]="rows" [columns]="columns">
 *  <RtcView viewType="remote" [uid]="firstUserUid"></RtcView>
 *  <RtcView viewType="remote" [uid]="secondUserUid"></RtcView
 *  <RtcView viewType="local"></RtcView>
 * </GridLayout>
 */

export class RtcEngine extends RtcEngineCommon {
    engine: io.agora.rtc.RtcEngine;
    create(appId, areaCode: AreaCode) {
        const config = new io.agora.rtc.RtcEngineConfig();
        config.mAppId = appId;
        config.mAreaCode = areaCode;
        config.mContext = Application.android.context;
        // config.mEventHandler //
        this.engine = io.agora.rtc.RtcEngine.create(config);
        if (this.clientRole) {
            this.engine.setClientRole(this.clientRole);
        }
    }
    [clientRoleProperty.setNative](role: ClientRole) {
        this.engine.setClientRole(role);
    }
    // setClientRole(role: ClientRole) {
    //     this.engine.setClientRole(role);
    // }
}


// const engine = new RtcEngine();
// engine.create("aa", AreaCode.GLOB);
// engine.clientRole = ClientRole.Audience;


