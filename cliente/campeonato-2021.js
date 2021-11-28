/*
Trabajo final del curso boostrap.
------------------------------------------
Nombre: Yordanis Pérez Brito
No. Identidad: 78090814764 (11 números)
Email: yordanis.perez@desoft.cu
División/empresa: Desoft. Cienfuegos
*/

const palomares = [
   {
      "id": "0001",
      "name": "Yasmani",
      "distancias": [184.308, 252.913, 252.913, 296.791],
      "lugar": "Santiago de Cartagena",
   },
   {
      "id": "0002",
      "name": "Yordanis",
      "distancias": [184.709,	253.325,	253.325,	297.203],
      "lugar": "Santiago de Cartagena",

   },
   {
      "id": "0003",
      "name": "Ramonin",
      "distancias": [175.407, 244.056, 244.056, 287.815],
      "lugar": "Cartagena",

   },
   {
      "id": "0004",
      "name": "Marcos",
      "distancias": [181.719, 249.987, 249.87, 293.7],
      "lugar": "Turquino",
   },
   {
      "id": "0005",
      "name": "Leo",
      "distancias": [180.893, 249.241, 249.241, 292.963],
      "lugar": "Turquino",
   },
   {
      "id": "0006",
      "name": "Orelbis",
      "distancias": [187.463, 255.675, 255.675, 299.342],
      "lugar": "Las Medidas",
   },
   {
      "id": "0007",
      "name": "Peteta",
      "distancias": [175.585, 243.958, 243.958, 287.721],
      "lugar": "Cartagena",
   },
   {
      "id": "0008",
      "name": "Luisito",
      "distancias": [175.73, 244.119, 244.119, 287.89],
      "lugar": "Cartagena",
   },
   {
      "id": "0009",
      "name": "bolo",
      "distancias": [175.77, 244.144, 244.144, 287.905],
      "lugar": "Cartagena",
   },
   {
      "id": "0010",
      "name": "jimagua",
      "distancias": [175.167, 243.569, 243.569, 287.344],
      "lugar": "Cartagena",
   },
   {
      "id": "0011",
      "name": "eulleni",
      "distancias": [179.66, 247.985, 247.985, 291.719],
      "lugar": "Turquino",
   },
   {
      "id": "0012",
      "name": "alexei",
      "distancias": [179.674, 248.005, 248.005, 291.738],
      "lugar": "Turquino",
   },
   {
      "id": "0013",
      "name": "Cristofer",
      "distancias": [179.66, 247.985, 247.985, 291.719],
      "lugar": "Turquino",
   },
]

const puntoSuelta = [
   {
      "idSuelta": 0,
      "lugar": "Jicotea",
      "hora_suelta": "07:55:00",
      "premios": []
   },
   {
      "idSuelta": 1,
      "lugar": "Cespedes-1",
      "hora_suelta": "07:50:00",
      "premios": [
         { "noAnillo": "083031", "horaEntrada": "11:32:00" },
         { "noAnillo": "144887", "horaEntrada": "11:32:00" },
         { "noAnillo": "083024", "horaEntrada": "11:35:00" },
         { "noAnillo": "1337551", "horaEntrada": "11:29:00" },
         { "noAnillo": "083040", "horaEntrada": "11:39:00" },
         { "noAnillo": "129533", "horaEntrada": "11:47:00" },
         { "noAnillo": "1365839", "horaEntrada": "11:44:00" },
         { "noAnillo": "217762", "horaEntrada": "11:50:00" },
         { "noAnillo": "2862481", "horaEntrada": "11:53:00" },
         { "noAnillo": "111136", "horaEntrada": "11:54:00" },
         { "noAnillo": "61854", "horaEntrada": "11:56:00" },
         { "noAnillo": "79531", "horaEntrada": "12:12:00" },
         { "noAnillo": "3182050", "horaEntrada": "12:07:00" },
         { "noAnillo": "217711", "horaEntrada": "12:14:00" },
         { "noAnillo": "68603", "horaEntrada": "12:24:00" },
         { "noAnillo": "144752", "horaEntrada": "12:27:00" },
         { "noAnillo": "78196", "horaEntrada": "12:27:00" },
         { "noAnillo": "205177", "horaEntrada": "12:34:00" },
         { "noAnillo": "63798", "horaEntrada": "12:36:00" },
      ]
   },
   {
      "idSuelta": 2,
      "lugar": "Cespedes-2",
      "hora_suelta": "07:20:00",
      "premios": [
         { "noAnillo": "144710", "horaEntrada": "10:01:00" },
         { "noAnillo": "61813", "horaEntrada": "10:00:00" },
         { "noAnillo": "77738", "horaEntrada": "10:00:00" },
         { "noAnillo": "217711", "horaEntrada": "10:00:00" },
         { "noAnillo": "083021", "horaEntrada": "10:03:00" },
         { "noAnillo": "144887", "horaEntrada": "10:03:00" },
         { "noAnillo": "5974", "horaEntrada": "10:01:00" },
         { "noAnillo": "585912", "horaEntrada": "09:58:00" },
         { "noAnillo": "110377", "horaEntrada": "10:04:00" },
         { "noAnillo": "108871", "horaEntrada": "10:04:00" },
         { "noAnillo": "337593", "horaEntrada": "10:07:00" },
         { "noAnillo": "322801", "horaEntrada": "10:07:00" },
         { "noAnillo": "083031", "horaEntrada": "10:06:00" },
         { "noAnillo": "872535", "horaEntrada": "10:08:00" },
         { "noAnillo": "78749", "horaEntrada": "10:05:00" },
         { "noAnillo": "083150", "horaEntrada": "10:02:00" },
         { "noAnillo": "1", "horaEntrada": "10:10:00" },
      ]
   },
   {
      "idSuelta": 3,
      "lugar": "Camaguey",
      "hora_suelta": "07:10:00",
      "premios": [
         { "noAnillo": "61241", "horaEntrada": "11:09:00" },
         { "noAnillo": "12162", "horaEntrada": "11:10:00" },
         { "noAnillo": "083031", "horaEntrada": "11:18:00" },
         { "noAnillo": "77738", "horaEntrada": "11:16:00" },
         { "noAnillo": "144887", "horaEntrada": "11:20:00" },
         { "noAnillo": "161", "horaEntrada": "11:20:00" },
         { "noAnillo": "217763", "horaEntrada": "11:19:00" },
         { "noAnillo": "083150", "horaEntrada": "11:15:00" },
         { "noAnillo": "083021", "horaEntrada": "11:24:00" },
         { "noAnillo": "633832", "horaEntrada": "11:24:00" },
         { "noAnillo": "217762", "horaEntrada": "11:25:00" },
         { "noAnillo": "78749", "horaEntrada": "11:25:00" },
      ]
   }
]

const palomas = [
   { "anno": "2017", "noAnillo": "61241", "idColombofilo": "0003", "sexo": "Hembra", "color": "Rojo" },
   { "anno": "2017", "noAnillo": "12162", "idColombofilo": "0003", "sexo": "Macho", "color": "Empedrado" },
   { "anno": "2019", "noAnillo": "083031", "idColombofilo": "0002", "sexo": "Macho", "color": "Azul" },
   { "anno": "2016", "noAnillo": "77738", "idColombofilo": "0004", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2017", "noAnillo": "144887", "idColombofilo": "0002", "sexo": "Hembra", "color": "Azul" },
   { "anno": "2017", "noAnillo": "161", "idColombofilo": "0001", "sexo": "Hembra", "color": "Mozaica" },
   { "anno": "2019", "noAnillo": "217763", "idColombofilo": "0004", "sexo": "Macho", "color": "Azul" },
   { "anno": "2019", "noAnillo": "083150", "idColombofilo": "0003", "sexo": "Hembra", "color": "Azul" },
   { "anno": "2019", "noAnillo": "083021", "idColombofilo": "0002", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2011", "noAnillo": "633832", "idColombofilo": "0001", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2019", "noAnillo": "217762", "idColombofilo": "0004", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2017", "noAnillo": "78749", "idColombofilo": "0004", "sexo": "Macho", "color": "Mozaica" },
   { "anno": "2017", "noAnillo": "144710", "idColombofilo": "0001", "sexo": "Hembra", "color": "Rojo" },
   { "anno": "2019", "noAnillo": "61813", "idColombofilo": "0004", "sexo": "Macho", "color": "Empedrado" },
   { "anno": "2019", "noAnillo": "217711", "idColombofilo": "0004", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2015", "noAnillo": "5974", "idColombofilo": "0004", "sexo": "Hembra", "color": "Azul" },
   { "anno": "2018", "noAnillo": "585912", "idColombofilo": "0003", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2012", "noAnillo": "110377", "idColombofilo": "0001", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2012", "noAnillo": "108871", "idColombofilo": "0001", "sexo": "Macho", "color": "Empedrado" },
   { "anno": "2010", "noAnillo": "337593", "idColombofilo": "0006", "sexo": "Macho", "color": "Rojo" },
   { "anno": "2019", "noAnillo": "322801", "idColombofilo": "0006", "sexo": "Macho", "color": "Azul" },
   { "anno": "2018", "noAnillo": "872535", "idColombofilo": "0006", "sexo": "Macho", "color": "Blanca" },
   { "anno": "2019", "noAnillo": "1", "idColombofilo": "0005", "sexo": "Hembra", "color": "Azul" },
   { "anno": "2019", "noAnillo": "083024", "idColombofilo": "0002", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "Sin Año", "noAnillo": "1337551", "idColombofilo": "0009", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2019", "noAnillo": "083040", "idColombofilo": "0002", "sexo": "Macho", "color": "Azul" },
   { "anno": "2017", "noAnillo": "129533", "idColombofilo": "0012", "sexo": "Macho", "color": "Empedrado" },
   { "anno": "Sin Año", "noAnillo": "1365839", "idColombofilo": "0008", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2018", "noAnillo": "2862481", "idColombofilo": "0005", "sexo": "Macho", "color": "Empedrado" },
   { "anno": "2018", "noAnillo": "111136", "idColombofilo": "0005", "sexo": "Macho", "color": "Empedrado" },
   { "anno": "2019", "noAnillo": "61854", "idColombofilo": "0012", "sexo": "Macho", "color": "Azul" },
   { "anno": "2016", "noAnillo": "79531", "idColombofilo": "0005", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "Sin Año", "noAnillo": "3182050", "idColombofilo": "0008", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2017", "noAnillo": "68603", "idColombofilo": "0001", "sexo": "Hembra", "color": "Rojo" },
   { "anno": "2018", "noAnillo": "144752", "idColombofilo": "0002", "sexo": "Hembra", "color": "Negro" },
   { "anno": "2016", "noAnillo": "78196", "idColombofilo": "0004", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2018", "noAnillo": "205177", "idColombofilo": "0006", "sexo": "Hembra", "color": "Empedrado" },
   { "anno": "2002", "noAnillo": "63798", "idColombofilo": "0002", "sexo": "Macho", "color": "Azul" },

]
/*
var theDropdown = document.getElementById('myDropdown')
theDropdown.addEventListener('show.bs.dropdown', function () {
     alert('hi');
     
})

$('.dropdown').on('show.bs.dropdown', function () {
   $(this).parents('.item-content').addClass('active');
});*/

function loadingColombofilos() {
   const div = document.getElementById('colombofilos');

   palomares.map(pl => {
      div.innerHTML += `
      <div class="card col-md-5 col-md-offset-1 col-sm-12 ">
         
         <div class=card-line>
         <table class="table table-striped table-responsive">

         <tr>
            <td><h5 class="card-title">Colombofilo:</h5></td>
            <td><h5 class="card-value"> ${pl.name} </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Ubicación del palomar:</h5></td>
            <td><h5 class="card-value"> ${pl.lugar} </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Distancia a pto Suelta : ${puntoSuelta[0].lugar} </h5></td>
            <td><h5 class="card-value"> ${pl.distancias[0]} km </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Distancia a pto Suelta : ${puntoSuelta[1].lugar} </h5></td>
            <td><h5 class="card-value"> ${pl.distancias[1]} km </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Distancia a pto Suelta : ${puntoSuelta[2].lugar} </h5></td>
            <td><h5 class="card-value"> ${pl.distancias[2]} km </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Distancia a pto Suelta : ${puntoSuelta[3].lugar} </h5></td>
            <td><h5 class="card-value"> ${pl.distancias[3]} km</h5></td>
         <tr>                           
      </table>
         </div>
        
      </div>
      `



   })


   loadingPigeon()
   loadingStadist()
}

function loadingPigeon() {
   const palCol = palomas.map(itPal => {
      const colomb = palomares.filter(pal => pal.id === itPal.idColombofilo)
      return { ...itPal, ...colomb[0] }
   })

   const div = document.getElementById('palomas');

   palCol.map(pl => {
      div.innerHTML += `
      <div class="card col-md-5 col-md-offset-1 col-sm-12 ">
         <img src="imagenes/${pl.color}.jpg" alt="Imagen de la paloma" class="img-rounded img-card">
         <div class=card-line>
         <table class="table table-striped table-responsive">

         <tr>
            <td><h5 class="card-title">Colombofilo:</h5></td>
            <td><h5 class="card-value"> ${pl.name} </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Ubicación del palomar:</h5></td>
            <td><h5 class="card-value"> ${pl.lugar} </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">No Anillo:</h5></td>
            <td><h5 class="card-value"> ${pl.noAnillo} </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Año:</h5></td>
            <td><h5 class="card-value"> ${pl.anno} </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Color:</h5></td>
            <td><h5 class="card-value"> ${pl.color} </h5></td>
         <tr>
         <tr>
            <td><h5 class="card-title">Sexo:</h5></td>
            <td><h5 class="card-value"> ${pl.sexo} </h5></td>
         <tr>                        
      </table>
     </div>  
   </div>
      `



   })



}


function loadingStadist() {

   const dataPremios = puntoSuelta.map(pts => {
      if (!pts.premios.length)
         return []
      return pts.premios.map(itPrem => {
         let pal, colomb;
         //asociando palomas a palomeros y pto de suelta
         try {
            pal = palomas.filter(itPal => itPrem.noAnillo === itPal.noAnillo)
            colomb = palomares.filter(itColomb => pal[0].idColombofilo === itColomb.id)
         } catch (error) {
            console.log(`La paloma con anillo ${itPrem.noAnillo} no se encuentra registrada`)
         }
         //Operaciones con la hora de entrada de cada paloma y hora de suelta del vuelo
         const hora_entrada_arr = itPrem.horaEntrada.split(':')
         const hora_suelta_arr = pts.hora_suelta.split(':')

         const hora_entrada = new Date(0, 0, 0, hora_entrada_arr[0], hora_entrada_arr[1], hora_entrada_arr[2])
         const hora_suelta = new Date(0, 0, 0, hora_suelta_arr[0], hora_suelta_arr[1], hora_suelta_arr[2])
         const tiempoVuelo = new Date(hora_entrada.getTime() - hora_suelta.getTime())
         const tiempoVueloMin = tiempoVuelo.getUTCHours() * 60 + tiempoVuelo.getUTCMinutes()

         //Construyendo la tabla con los datos que se publicaran de las palomas
         return {
            ...itPrem,
            ...pal[0],
            ...colomb[0],
            ...pts,
            "distancia": colomb[0].distancias[pts.idSuelta],
            "velocidadMtsMin":Math.round(100* colomb[0].distancias[pts.idSuelta] * 1000 / tiempoVueloMin)/100,
            "velocidadKmHrs":Math.round(100* colomb[0].distancias[pts.idSuelta] * 60 / tiempoVueloMin)/100
         }
      })
   })

   //ordenando las palomas por velocidades
   dataPremios.forEach(itFly => {
      itFly.sort((it1, it2) => {
         return it1.velocidadMtsMin > it2.velocidadMtsMin ? -1 : it1.velocidadMtsMin < it2.velocidadMtsMin ? 1 : 0
      })
   })

   //calculando los pts ganados por cada paloma y agregandolo a la tabla

   const dataPremiosCalculados = dataPremios.map(itpremio => {
      if (!itpremio.length)
         return []
      const speedFirstPigeon = itpremio[0].velocidadMtsMin
      const distanceFirstPigeon = itpremio[0].distancia
      return itpremio.map(itPremioPt => {
         return {
            ...itPremioPt,
            "puntos":Math.round(100*itPremioPt.velocidadMtsMin * distanceFirstPigeon / speedFirstPigeon)/100
         }
      })

   })
   console.log(dataPremiosCalculados)
   const div = document.getElementById('estadisticas');

   dataPremiosCalculados.map((dtPremiosPtsuelta,indexPto) => {
      div.innerHTML += `
      <h1>${puntoSuelta[indexPto].lugar}</h1>
      <div class="card col-md-10 col-md-offset-1 col-sm-12 ">
         <div class=card-line>
         <table class="table table-striped table-responsive" id="${puntoSuelta[indexPto].lugar}">
         <tr>
            <th>Lugar</th>
            <th>Nombre</th>
            <th>No Anillo</th>
            <th class="card-hide">Sexo</th>
            <th class="card-hide">Color</th>
            <th class="card-hide">Distancia</th>   
            <th>Km/h</th>
            <th class="card-hide">Puntos</th>                         
         </tr>
         </table>
         </div>  
      </div>
      `
      dtPremiosPtsuelta.map((premioPal,lugar)=>{
         const table = document.getElementById(puntoSuelta[indexPto].lugar);
         table.innerHTML += `
            <tr>
               <td><h5 class="card-title">${lugar+1}</h5></td>
               <td><h5 class="card-title"> ${premioPal.name} </h5></td>
               <td><h5 class="card-title">${premioPal.noAnillo}</h5></td>
               <td class="card-hide"><h5 class="card-value"> ${premioPal.sexo} </h5></td>
               <td class="card-hide"><h5 class="card-value">${premioPal.color}</h5></td>
               <td class="card-hide"><h5 class="card-value"> ${premioPal.distancia} </h5></td>
               <td><h5 class="card-title">${premioPal.velocidadKmHrs}</h5></td>
               <td class="card-hide"><h5 class="card-value"> ${premioPal.puntos} </h5></td>                             
            <tr>
       `
      })
   
   })

}

/*
Trabajo final del curso boostrap.
------------------------------------------
Nombre: Yordanis Pérez Brito
No. Identidad: 78090814764 (11 números)
Email: yordanis.perez@desoft.cu
División/empresa: Desoft. Cienfuegos
*/