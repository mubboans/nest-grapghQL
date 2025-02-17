import { Model, PopulateOptions } from "mongoose";

export const create = async (model: Model<any>, data: any) => {
    try {
        const newData = new model(data);
        return await newData.save();
    } catch (error) {
        throw new Error(error);
    }
}

export const update = async (model: Model<any>, id: string, data: any) => {
    try {
        return await model.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error(error);
    }
}

export const findById = async (model: Model<any>, id: string) => {
    try {
        return await model.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}   

export const find = async (
  model: Model<any>, 
  query: any, 
  populate?: PopulateOptions | (string | PopulateOptions)[]
) => {
    try {
        const baseQuery = model.find(query);
        
        if (populate) {
            return await baseQuery.populate(populate).exec();
        }
        
        return await baseQuery;
    } catch (error) {
        throw new Error(error);
    }
}   

export const deleteById = async (model: Model<any>, id: string) => {
    try {
        return await model.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }   
}