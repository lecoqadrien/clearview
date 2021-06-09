$(document).ready(
    function(){
       
        $('#zero > img:first-child').hover(
            
        function(){
            //on survol l'élément
            $(this).attr('src','img/location2.png')
            $('#zero > img:nth-child(2)').attr('src','img/panneau-accueil2.png')
            
        },
            function(){
                //on ne survol plus l'élément
                $(this).attr('src','img/location1.png')
                $('#zero > img:nth-child(2)').attr('src','img/panneau-accueil.png')
            }
    )
        
        $('#un > img:first-child').hover(
            
        function(){
            //on survol l'élément
            $(this).attr('src','img/location2.png')
            $('#un > img:nth-child(2)').attr('src','img/histoire-accueil2.png')
            
            
        },
            function(){
                //on ne survol plus l'élément
                $(this).attr('src','img/location1.png')
                $('#un > img:nth-child(2)').attr('src','img/histoire-accueil.png')
            }
    )
        
        $('#deux > img:first-child').hover(
            
        function(){
            //on survol l'élément
            $(this).attr('src','img/location2.png')
            $('#deux > img:nth-child(2)').attr('src','img/pan-accueil2.png')
            
        },
            function(){
                //on ne survol plus l'élément
                $(this).attr('src','img/location1.png')
                $('#deux > img:nth-child(2)').attr('src','img/pan-accueil.png')
            }
    )
        
        $('#trois > img:first-child').hover(
            
        function(){
            //on survol l'élément
            $(this).attr('src','img/location2.png')
            $('#trois > img:nth-child(2)').attr('src','img/observons-accueil2.png')
            
        },
            function(){
                //on ne survol plus l'élément
                $(this).attr('src','img/location1.png')
                $('#trois > img:nth-child(2)').attr('src','img/observons-accueil.png')
            }
    )
        
        $('.modale1 > div > img:first-child').hover(
            
        function(){
            //on survol l'élément
            $(this).attr('src','img/croix2.png')
            
            
        },
            function(){
                //on ne survol plus l'élément
                $(this).attr('src','img/croix.png')
            }
    )
        
        $('.modale2 > div > img:first-child').hover(
            
        function(){
            //on survol l'élément
            $(this).attr('src','img/croix2.png')
            
            
        },
            function(){
                //on ne survol plus l'élément
                $(this).attr('src','img/croix.png')
            }
    )
        
        $('.modale3 > div > img:first-child').hover(
            
        function(){
            //on survol l'élément
            $(this).attr('src','img/croix2.png')
            
            
        },
            function(){
                //on ne survol plus l'élément
                $(this).attr('src','img/croix.png')
            }
    )
        
        $('#un > img').click(function(){
            $('.premier').addClass('open')
            $('.links').addClass('off')
        });
        
        $('.modale1 > div > img').click(function(){
            $('.premier').removeClass('open')
            $('.links').removeClass('off')
        });
        
        $('#deux > img').click(function(){
            $('.deuxieme').addClass('open')
            $('.links').addClass('off')
        });
        
        $('.modale2 > div > img').click(function(){
            $('.deuxieme').removeClass('open')
            $('.links').removeClass('off')
        });
        
        $('#trois > img').click(function(){
            $('.troisieme').addClass('open')
            $('.links').addClass('off')
        });
        
        $('.modale3 > div > img').click(function(){
            $('.troisieme').removeClass('open')
            $('.links').removeClass('off')
        });
    
        
        let fontSize = $('textarea').css('font-size');
    
    $('input').on('change mousemove',function(){
        let value = $(this).val();
        console.log(value);
        
        $('textarea').css({'font-size': parseInt(fontSize) * value})
        
        $('textarea').css({'fontSize': nouvelleTaille})
        
        $('span').html(nouvelleTaille)
        
        $('textarea').autoResize();
    });
        
       $('.visibilite').toggle(
        function(){
            
            
            $('.text').html('Revoir le panneau <br> HIGHWAY');
            $('.modale2 > div > article:nth-child(4) > img').attr('src','img/visibilite2.png');
        },
            function(){
                $('.text').html('Cliquez pour améliorer la visibilité');
                $('.modale2 > div > article:nth-child(4) > img').attr('src','img/visibilite.png');
            }
        ) 
        
        $('body > div > .links > li > a').click(function(){
            $('body > div > .links > li > a').removeClass('active')
            $(this).addClass('active')
        }
                     )
        //Fonction qui permet de cliquer sur une région de france ====== map_francer_region.php


$(function(){

    /*A chaque fois que je clique sur une de mes régions */

    $('[id*=pays_').on('click',function(){ 


        let pays = $(this); /*C 'est la région sur laquelle j'ai cliqué */

        let paysId = $(this)["0"].id;
        let allPays = $('[id*=pays'); /* C 'est l'ensemble des régions sur laquelle j'ai cliqué */

        console.log(paysId);

        /*Lors du clique, 
        toutes les régions deviennent blanches mais la région cliqué devient verte
        */

        allPays.css('fill', '#fff');
        pays.css('fill','#000091');

        paysId = paysId.replace('pays_', '');

        console.log(paysId);

        let boucle = true;
        do{
            paysId = paysId.replace('_',' ');
            if(paysId.indexOf('_') == -1)
            boucle = false;
        }while(boucle);

        $('#infos_pays').text(paysId);
    });
})


$(document).ready(function(){
    $('.bloc_vert').click(function() {
        let paysFrance = $('[id*=pays_france');
        paysFrance.css('fill', '#fff');
        let pays_royaume_uni = $('[id*=pays_royaume_uni');
        pays_royaume_uni.css('fill' , '#fff');
        let paysEtatsUnis = $('[id*=pays_etats_unis');
        paysEtatsUnis.css('fill', '#026300');
        let paysEtatsUnis2 = $('[id*=pays_etats_unis2');
        paysEtatsUnis2.css('fill', '#026300');
        let paysEtatsUnis3 = $('[id*=etats_unis2');
        paysEtatsUnis3.css('fill', '#026300' )
        let paysCanada = $('[id*=pays_canada');
        paysCanada.css('fill', '#026300');
        let paysPhilippines = $('[id*=pays_philippines');
        paysPhilippines.css('fill', '#026300');
        let paysPhilippines2 = $('[id*=pays_philippines2');
        paysPhilippines2.css('fill', '#026300');
        let paysPhilippines3 = $('[id*=pays_philippines3');
        paysPhilippines3.css('fill', '#026300');
        let paysPhilippines4 = $('[id*=pays_philippines4');
        paysPhilippines4.css('fill', '#026300');
        let paysPhilippines5 = $('[id*=pays_philippines5');
        paysPhilippines5.css('fill', '#026300');
        let paysPhilippines6 = $('[id*=pays_philippines6');
        paysPhilippines6.css('fill', '#026300');
        let paysPhilippines7 = $('[id*=pays_philippines7');
        paysPhilippines7.css('fill', '#026300');
        let paysIndonesie = $('[id*=pays_indonesie');
        paysIndonesie.css('fill', '#026300');
        let paysIndonesie2 = $('[id*=pays_indonesie2');
        paysIndonesie2.css('fill', '#026300');
        let paysIndonesie3 = $('[id*=pays_indonesie3');
        paysIndonesie3.css('fill', '#026300');
        let paysIndonesie4 = $('[id*=pays_indonesie4');
        paysIndonesie4.css('fill', '#026300');
        let paysIndonesie5 = $('[id*=pays_indonesie5');
        paysIndonesie5.css('fill', '#026300');
        let paysIndonesie6 = $('[id*=pays_indonesie6');
        paysIndonesie6.css('fill', '#026300');
        let paysIndonesie7 = $('[id*=pays_indonesie7');
        paysIndonesie7.css('fill', '#026300');
        let paysIndonesie8 = $('[id*=pays_indonesie8');
        paysIndonesie8.css('fill', '#026300');
        let paysIndonesie9 = $('[id*=pays_indonesie9');
        paysIndonesie9.css('fill', '#026300');


        /* Etats d'Amerique */
        let paysAlabama = $('[id*=pays_alabama_etat');
        paysAlabama.css('fill', '#026300');
        let paysArizona =  $('[id*=pays_arizona_etat');
        paysArizona.css('fill', '#026300');
        let paysArkansas = $('[id*=pays_arkansas_etat');
        paysArkansas.css('fill', '#026300');
        let paysDelaware = $('[id*=pays_delaware_etat');
        paysDelaware.css('fill', '#026300');
        let paysHawaii = $('[id*=pays_hawaii_etat');
        paysHawaii.css('fill', '#026300');
        let paysIllinois = $('[id*=pays_illinois_etat');
        paysIllinois.css('fill', '#026300');
        let paysLousiane = $('[id*=pays_louisiane_etat');
        paysLousiane.css('fill', '#026300');
        let paysMaryland = $('[id*=pays_maryland_etat');
        paysMaryland.css('fill', '#026300');
        let paysMichigan = $('[id*=pays_michigan_etat');
        paysMichigan.css('fill', '#026300');
        let paysOhio = $('[id*=pays_ohio_etat');
        paysOhio.css('fill', '#026300');
        let paysOklahoma = $('[id*=pays_oklahoma_etat');
        paysOklahoma.css('fill', '#026300');
        let paysPennsylvanie = $('[id*=pays_pennsylvanie_etat');
        paysPennsylvanie.css('fill', '#026300');
        let paysCarolineDuSud = $('[id*=pays_caroline_sud_etat');
        paysCarolineDuSud.css('fill', '#026300');
        let paysTexas = $('[id*=pays_texas_etat');
        paysTexas.css('fill', '#026300');
        let paysVirginie = $('[id*=pays_virginie_etat');
        paysVirginie.css('fill', '#026300');
        let paysVirginieOuest = $('[id*=pays_alabama_etat');
        paysVirginieOuest.css('fill', '#026300');

        

        $('#infos_pays').text(paysId);
    })

    $('.bloc_gris').click(function() {
        let paysEtatsUnis = $('[id*=pays_etats_unis');
        paysEtatsUnis.css('fill', '#fff');
        let paysEtatsUnis2 = $('[id*=pays_etats_unis2');
        paysEtatsUnis2.css('fill', '#fff');
        let paysEtatsUnis3 = $('[id*=etats_unis2');
        paysEtatsUnis3.css('fill', '#fff' )
        let paysCanada = $('[id*=pays_canada');
        paysCanada.css('fill', '#fff');
        let paysPhilippines = $('[id*=pays_philippines');
        paysPhilippines.css('fill', '#fff');
        let paysPhilippines2 = $('[id*=pays_philippines2');
        paysPhilippines2.css('fill', '#fff');
        let paysPhilippines3 = $('[id*=pays_philippines3');
        paysPhilippines3.css('fill', '#fff');
        let paysPhilippines4 = $('[id*=pays_philippines4');
        paysPhilippines4.css('fill', '#fff');
        let paysPhilippines5 = $('[id*=pays_philippines5');
        paysPhilippines5.css('fill', '#fff');
        let paysPhilippines6 = $('[id*=pays_philippines6');
        paysPhilippines6.css('fill', '#fff');
        let paysPhilippines7 = $('[id*=pays_philippines7');
        paysPhilippines7.css('fill', '#fff');
        let paysIndonesie = $('[id*=pays_indonesie');
        paysIndonesie.css('fill', '#fff');
        let paysIndonesie2 = $('[id*=pays_indonesie2');
        paysIndonesie2.css('fill', '#fff');
        let paysIndonesie3 = $('[id*=pays_indonesie3');
        paysIndonesie3.css('fill', '#fff');
        let paysIndonesie4 = $('[id*=pays_indonesie4');
        paysIndonesie4.css('fill', '#fff');
        let paysIndonesie5 = $('[id*=pays_indonesie5');
        paysIndonesie5.css('fill', '#fff');
        let paysIndonesie6 = $('[id*=pays_indonesie6');
        paysIndonesie6.css('fill', '#fff');
        let paysIndonesie7 = $('[id*=pays_indonesie7');
        paysIndonesie7.css('fill', '#fff');
        let paysIndonesie8 = $('[id*=pays_indonesie8');
        paysIndonesie8.css('fill', '#fff');
        let paysIndonesie9 = $('[id*=pays_indonesie9');
        paysIndonesie9.css('fill', '#fff');
        let paysFrance = $('[id*=pays_france');
        paysFrance.css('fill', '#DC6107');
        let pays_royaume_uni = $('[id*=pays_royaume_uni');
        pays_royaume_uni.css('fill' , '#DC6107');
    })
})





/*Fonction carte hauts de france */

/*Fonction Carte P vers Nord pas de calais */

    $(function(){
    /*Fonction click nord pas de calais va permettre de faire une redirection vers la page nord pas de calais avec l ensemble des villes */
    $('[id*=pays_etats_unis').on('click',function(){
        document.getElementById('svg2').style.display = "none";
        document.getElementById('svg10344').style.display = "block";
    });
    $('[id*=back_map').on('click',function(){
        document.getElementById('svg10344').style.display = "none";
        document.getElementById('svg2').style.display = "block";
        
    });
})


    }   
)