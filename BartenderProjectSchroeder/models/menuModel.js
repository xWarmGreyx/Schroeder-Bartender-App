const supabase = require('../supabaseClient');

exports.getMenu = async () => {
    const { data, error } = await supabase.from('menu').select('*');
    if (error) throw error;
    return data;
};