import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.47.15/+esm";

export class DB {

  static dbURL = 'https://sjmhgrlbszcfvbjrintx.supabase.co';
  static AnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqbWhncmxic3pjZnZianJpbnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NjA4MTIsImV4cCI6MjA1MjUzNjgxMn0.8aNzh13FfUhxyIuzNUogjUYehu2De2N0t7NgZ0NhhOU';
  
  async getData() {
    const supabase = createClient(DB.dbURL, DB.AnonKey);
    const {data, error} = await supabase
    .from('visitors')
    .select()
    .order('id', { ascending: true });

    if (!error) {
      console.log(data);
      return data;
    }
    else {
      console.error(error);
      return {error: true, message: "Hubo un problema al obtener la información, inténtalo más tarde."}
    }
  }

  async getDataById(id) {
    const supabase = createClient(DB.dbURL, DB.AnonKey);
    const {data, error} = await supabase
    .from('visitors')
    .select()
    .eq('id', id);

    if (!error) {
      console.log(data);
      return data;
    }
    else {
      console.log(error(error));
      return {error: true, message: "Hubo un problema al obtener la información del visitante."}
    }
  }

  async insertData(info) {
    const supabase = createClient(DB.dbURL, DB.AnonKey);
    const { data, error } = await supabase
    .from('visitors')
    .insert({ 
      name: info.name,
      email: info.email,
      phone: info.phone,
      company: info.company,
      position: info.position,
      address: info.address,
      postalCode: info.postalCode,
      state: info.state,
      municipality: info.municipality,
      neighborhood: info.neighborhood,
      country: info.country,
    }, { returning: 'minimal' })
    .select();

    if (!error) {
      console.log(data);
      return data;
    }
    else {
      console.log(error(error));
      return {error: true, message: "Hubo un problema al registrarte, por favor inténtalo más tarde."}
    }
  }

  async insertVisit(id, day) {
    const supabase = createClient(DB.dbURL, DB.AnonKey);
    console.log(id, day);
    if (day === 1) {
      const { data, error } = await supabase
      .from('visitors')
      .update({ dia1: true })
      .eq('id', id)
      .select();
      if (!error) {
        console.log(data);
        return data;
      }
      else {
        console.error(error);
        return {error: true, message: "Hubo un problema al registrar la asistencia, por favor inténtalo más tarde."}
      }
    }
    else if (day === 2) {
      const { data, error } = await supabase
      .from('visits')
      .update({ dia2: true })
      // .eq('id', id);
      .match({ id: id })
      if (!error) {
        console.log(data);
        return data;
      }
      else {
        return {error: true, message: "Hubo un problema al registrar la asistencia, por favor inténtalo más tarde."}
      }
    }
    else  if (day === 3) {
      const { data, error } = await supabase
      .from('visits')
      .update({ dia3: true })
      .eq('id', id);
      if (!error) {
        console.log(data);
        return data;
      }
      else {
        return {error: true, message: "Hubo un problema al registrar la asistencia, por favor inténtalo más tarde."}
      }
    }
    else {
      return {error: true, message: "Hubo un problema al registrar la asistencia, por favor inténtalo más tarde."}
    }
  }

}