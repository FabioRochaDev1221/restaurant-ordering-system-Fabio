import supabase from "../config/supabase.js";

async function findAll() {
    const { data, error } = await supabase
    .from("categories")
    .select("*");

    if (error){
        throw error;
    }

    return data;
    
}

async function create(categorie:{
    name: string,
    description: string,
    icon: string,
    display_order: number,
    active: boolean,
}) {
    const { data, error } = await supabase
    .from("categories")
    .insert(categorie)
    .select()
    .single();

    if (error){
        throw error;
    }
    
    return data;
}

export default {
    findAll,
    create
};