const Database = require('./db')

const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela


    
    await saveOrphanage(db, {

        
        lat : "-22.8526167",
        lng : "-43.3791616",
        name : "lar dos meninos",
        about : "qualquer coisa de teste meninos",
        whatsapp : "912982115",
        images : [

            "https://images.unsplash.com/photo-1595295425007-985abbb16b92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })
        

    

    // consultar dados da tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages')
    console.log(selectedOrphanages)

  

    // consultar os dados de somente 1 orfanato
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="1"')
    console.log(orphanage)

 
    // deletar dado da tabela
    await db.run('DELETE FROM orphanages WHERE id = ""')
 
})