const supabase = require('../supabaseClient');

exports.addOrder = async (drinkId, customerName) => {
    const { data, error } = await supabase.from('orders')
        .insert([{ drink_id: drinkId, customer_name: customerName }]).select()
        .single();
    if (error) throw error;
    return data;
};

exports.getOrders = async () => {
    const { data, error } = await supabase.from('orders').select('*');
    if (error) throw error;
    return data;
};

exports.completeOrder = async (id) => {
    const { data: order, error: findErr } = await supabase.from('orders').select('*')
        .eq('id', id).single();
    if (findErr) throw findErr;
    const { error: insertErr } = await supabase.from('ready_orders')
        .insert([{ drink_id: order.drink_id, customer_name: order.customer_name }]);
    if (insertErr) throw insertErr;
    const { error: deleteErr } = await supabase.from('orders').delete().eq('id', id);
    if (deleteErr) throw deleteErr;
    return { moved: true };
};

exports.getReadyOrders = async () => {
    const { data, error } = await supabase.from('ready_orders').select('*');
    if (error) throw error;
    return data;
};

exports.pickupOrder = async (id) => {
    const { error } = await supabase.from('ready_orders').delete().eq('id', id);
    if (error) throw error;
    return { pickedUp: true };
};