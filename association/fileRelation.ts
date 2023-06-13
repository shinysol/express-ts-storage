import File from "../models/file";
import User from "../models/user";

User.hasMany(File);
File.belongsTo(User);
