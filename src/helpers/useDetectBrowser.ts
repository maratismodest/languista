import {useState, useEffect} from "react";

export default function useDetectBrowser() {
    let sBrowser, sUsrAg = navigator.userAgent;
    const [browserName, setBrowserName] = useState("");
    useEffect(() => {
        if (sUsrAg.indexOf("Firefox") > -1) {
            sBrowser = "Firefox";
        } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
            sBrowser = "SamsungBrowser";
        } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
            sBrowser = "Opera";
        } else if (sUsrAg.indexOf("Trident") > -1) {
            sBrowser = "InternetExplorer";
        } else if (sUsrAg.indexOf("Edge") > -1) {
            sBrowser = "Edge";
        } else if (sUsrAg.indexOf("Chrome") > -1) {
            sBrowser = "Chrome";
        } else if (sUsrAg.indexOf("Safari") > -1) {
            sBrowser = "Safari";
        } else {
            sBrowser = "unknown";
        }
        setBrowserName(sBrowser);
    }, []);
    return browserName
}