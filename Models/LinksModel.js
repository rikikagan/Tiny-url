
import mongoose from "mongoose";

const ClicksSchema = mongoose.Schema({
    insertedAt: Date ,
    ipAddress: String,
    targetParamValue: String // הוספת שדה זה לשמירת ערך הפרמטר target
});
const TargetValueSchema = mongoose.Schema({
    name: String,
    value: String
});
const LinkSchema = mongoose.Schema({
    originalUrl: String,
    clicks: [ClicksSchema],
    targetParamName: { type: String, default: 't' }, // שם פרמטר ה-target
    targetValues: [TargetValueSchema] // מערך של מקורות פרסום
});

const LinksModel = mongoose.model('Links', LinkSchema);

export default LinksModel;


  