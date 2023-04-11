const actor=()=>{
    $('.actors').html('')
     actorss=[]
    films.map((item,key)=>{
        b = item.Actors.split(', ')
        b.map(item1=>{
            b=true
           actorss.map(item2=>{
               if(item1==item2){
                   b=false
               }
           }) 
           if(b){
               actorss.push(item1)
           }
        })
    })
    actorss.map(item=>{
        $('.actors').append(`
    <li onclick="droveactors('${item}')" style="background: linear-gradient(to left, #03bcf4, black);"><a class="dropdown-item" href="#">${item}</a></li>
        
        `)
    })

}
const droveactors=(actorss=>{
    $('.films').html('')
    
    films.map((item,key)=>{
        a=item.Actors.split(', ')
        b=false
        a.map(item1=>{
         if(item1==actorss){
             b=true
         }   
        })
        if(b){
            g=''
            a.map((item3)=>{
             if(key==a.length-1){
                 if(item3==actorss){
                     g+=`<span style="background-color: #03bcf4; color: black;padding: 0px 10px; font-weigth: bold;">${item3}</span>`
                 }else{
                     g+=item3+' '
                 }
             }else{
                 if(item3==actorss){
                     g+=`<span style="background-color: #03bcf4; color: black;padding: 0px 10px; font-weigth: bold;">${item3},</span>`
                 }else{
                     g+=item3+', '
                 }
             }
               
            })

         $('.films').append(`
         <div class="col-lg-4 col-md-6 col-sm-12">
   <div class="card">
           <img src="${item.Images[0]}" class="d-block card-img-top  " alt="...">
       <div class="card-body " style="background: linear-gradient(to right,#024458, black) !important;">
         <h5 style="color: white;" class="card-title"><b style="color: #03bcf4">Title: </b>${item.Title}</h5>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Year: </b>${item.Year}</p>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Genre: </b>${g}</p>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Language: </b>${item.Language}</p>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Country: </b>${item.Country}</p>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Actors: </b>${item.Actors}</p>
         <button  class="btn " onclick="openModal(${key})" style="    background: linear-gradient(to right,#2da9cf, black) !important;                        color: #03bcf4;">More info</button>
       </div>
     </div>
     </div>
 </div> 
         `)
        }
    }
    )
})
actor()
droveactors()

const year=()=>{
    $('.years').html('')
    yearss=[]
    films.map((item,key)=>{
        b = item.Year.split(', ')
        b.map(item1=>{
            b=true
           yearss.map(item2=>{
               if(item1==item2){
                   b=false
               }
           }) 
           if(b){
               yearss.push(item1)
           }
        })
    })
    yearss.map(item=>{
        $('.years').append(`
    <li onclick="droveyears('${item}')" style="background: linear-gradient(to left, #03bcf4, black);"><a class="dropdown-item" href="#">${item}</a></li>
        
        `)
    })

}
const droveyears=(yearss=>{
    $('.films').html('')
    
    films.map((item,key)=>{
        a=item.Year.split(', ')
        b=false
        a.map(item1=>{
         if(item1==yearss){
             b=true
         }   
        })
        if(b){
            g=''
            a.map((item3)=>{
             if(key==a.length-1){
                 if(item3==yearss){
                     g+=`<span style="background-color: #03bcf4; color: black;padding: 0px 10px; font-weigth: bold;">${item3}</span>`
                 }else{
                     g+=item3+' '
                 }
             }else{
                 if(item3==yearss){
                     g+=`<span style="background-color: #03bcf4; color: black;padding: 0px 10px; font-weigth: bold;">${item3},</span>`
                 }else{
                     g+=item3+', '
                 }
             }
               
            })

         $('.films').append(`
         <div class="col-lg-4 col-md-6 col-sm-12">
   <div class="card">
           <img src="${item.Images[0]}" class="d-block card-img-top  " alt="...">
       <div class="card-body " style="background: linear-gradient(to right,#024458, black) !important;">
         <h5 style="color: white;" class="card-title"><b style="color: #03bcf4">Title: </b>${item.Title}</h5>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Year: </b>${item.Year}</p>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Genre: </b>${g}</p>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Language: </b>${item.Language}</p>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Country: </b>${item.Country}</p>
         <p style="color: white;" class="card-text"><b style="color: #03bcf4">Actors: </b>${item.Actors}</p>
         <button  class="btn " onclick="openModal(${key})" style="    background: linear-gradient(to right,#2da9cf, black) !important;                        color: #03bcf4;">More info</button>
       </div>
     </div>
     </div>
 </div> 
         `)
        }
    }
    )
})
year()
droveyears()
const genres=()=>{
                $('.genres').html('')
                genre=[]
                films.map((item,key)=>{
                    a=item.Genre.split(', ')
                    a.map(item1=>{
                        b=true
                        genre.map(item2=>{
                            if(item1==item2){
                                b=false
                            }
                        })
                        if(b){
                        genre.push(item1)
                        }
                    })
                })
                
              genre.map(item=>{
                  $('.genres').append(`
              <li onclick="drovegenre('${item}')" style="background: linear-gradient(to left, #03bcf4, black);"><a class="dropdown-item" href="#">${item}</a></li>
                  
                  `)
              })
                
            }
           
            const drove=()=>{
                  $('.films').html('')
                  films.map((item,key)=>{
                      $('.films').append(`
                      <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                        <img src="${item.Images[0]}" class="d-block card-img-top  " alt="...">
                    <div class="card-body" style="background: linear-gradient(to left,#024458, black) !important;">
                      <h5 style="color: white;" class="card-title"><b style="color: #03bcf4;">Title: </b>${item.Title}</h5>
                      <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Year: </b>${item.Year}</p>
                      <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Genre: </b>${item.Genre}</p>
                      <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Language: </b>${item.Language}</p>
                      <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Country: </b>${item.Country}</p>
                      <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Actors: </b>${item.Actors}</p>
                      <button class="btn btn-primery " onclick="openModal(${key})" style="color: #03bcf4; background: linear-gradient(to right, #2da9cf, black)">More info</button>
                    </div>
                  </div>
                  </div>
              </div> 
                      `)

                  })
              }
              genres()
              drove()
               const drovegenre=(genre=>{
                   $('.films').html('')
                   
                   films.map((item,key)=>{
                       a=item.Genre.split(', ')
                       b=false
                       a.map(item1=>{
                        if(item1==genre){
                            b=true
                        }   
                       })
                       if(b){
                           g=''
                           a.map((item3)=>{
                            if(key==a.length-1){
                                if(item3==genre){
                                    g+=`<span style="background-color: #03bcf4; color: black;padding: 0px 10px; font-weigth: bold;">${item3}</span>`
                                }else{
                                    g+=item3+' '
                                }
                            }else{
                                if(item3==genre){
                                    g+=`<span style="background-color: #03bcf4; color: black;padding: 0px 10px; font-weigth: bold;">${item3},</span>`
                                }else{
                                    g+=item3+', '
                                }
                            }
                              
                           })

                        $('.films').append(`
                        <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="card">
                          <img src="${item.Images[0]}" class="d-block card-img-top  " alt="...">
                      <div class="card-body " style="background: linear-gradient(to right,#024458, black) !important;">
                        <h5 style="color: white;" class="card-title"><b style="color: #03bcf4">Title: </b>${item.Title}</h5>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4">Year: </b>${item.Year}</p>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4">Genre: </b>${g}</p>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4">Language: </b>${item.Language}</p>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4">Country: </b>${item.Country}</p>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4">Actors: </b>${item.Actors}</p>
                        <button  class="btn " onclick="openModal(${key})" style="    background: linear-gradient(to right,#2da9cf, black) !important;                        color: #03bcf4;">More info</button>
                      </div>
                    </div>
                    </div>
                </div> 
                        `)
                       }
                   }
                   )
               })

               const search=()=>{
                   a=$(".form-control").val()
                   a=a.toLowerCase()
                   $('.films').html('')

                   films.map((item,key)=>{
                       if(item.Title.toLowerCase().indexOf(a)!=-1){
                           x=item.Title.toLowerCase().indexOf(a)
                        $('.films').append(`
                        <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="card">
                          <img src="${item.Images[0]}" class="d-block card-img-top  " alt="...">
                      <div class="card-body">
                        <h5 style="color: white;" class="card-title"><b style="color: #03bcf4;">Title: </b>${item.Title.slice(0, x)}<span style="background-color: #03bcf4; color:black;">${item.Title.substr(x, a.length)}</span>${item.Title.slice(x+a.length)}</h5>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Year: </b>${item.Year}</p>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Genre: </b>${item.Genre}</p>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Language: </b>${item.Language}</p>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Country: </b>${item.Country}</p>
                        <p style="color: white;" class="card-text"><b style="color: #03bcf4;">Actors: </b>${item.Actors}</p>
                        <button class="btn btn-primery " onclick="openModal(${key})" style="color: #03bcf4; background: linear-gradient(to right,#2da9cf, black) !important;">More info</button>
                      </div>
                    </div>
                    </div>
                </div> 
                        `)
                       }
                       
                   })
               }

               const openModal=(id)=>{
                   a=films[id]
                   $('.infos').html('')
                   $('.images').html('')
                   $('.modal-title').html(a.Title)
                   $('.modal').modal("show")
                   a.Images.map(item=>{
                       $('.images').append(`<img src="${item}" class="films_img">`)
                   })
                   $('.infos').append(`
                   <p style="color: aqua;" class="card-text"><b style="color: #03bcf4;">Director: </b>${a.Director}</p>
                <p style="color: aqua;" class="card-text"><b style="color: #03bcf4;">Writer: </b>${a.Writer}</p>
                <p style="color: aqua;" class="card-text"><b style="color: #03bcf4;">Relased: </b>${a.Released}</p>
                <p style="color: aqua;" class="card-text"><b style="color: #03bcf4;">Run-time: </b>${a.Runtime}</p>
                <p style="color: aqua;" class="card-text"><b style="color: #03bcf4;">Info: </b>${a.Plot}</p>
                   `)
               }
        