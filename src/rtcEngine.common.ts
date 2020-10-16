import { Observable } from "tns-core-modules/";
import { ClientRole } from "./Enums";
import { Property } from "tns-core-modules/ui/core/properties";


export class RtcEngineCommon extends Observable {
    clientRole: ClientRole;
    
}


export const clientRoleProperty = new Property({
    name: "clientRole"
})

