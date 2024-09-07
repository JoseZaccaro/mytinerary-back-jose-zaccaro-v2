import mongoose from "mongoose";

async function databaseConnection(url: string, database: string) {
    let urlCluster = url
    if (url.endsWith("/")) {
        urlCluster = url.substring(0, url.length - 1)
    }
    try {
        const ok = await mongoose.connect(urlCluster + "/" + database)
        if (ok) {
            console.log("database connected!")
        }
    } catch (error) {
        console.log("Error: " + error);
    }

}

export default databaseConnection