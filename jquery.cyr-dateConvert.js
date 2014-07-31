/******************************************************/
/*              cyr-dateConvert jquery plugin         */
/*                                                    */
/* Author : Cyrakuse (cyrakuse@live.fr)               */
/* Version : 1.0.0                                    */
/******************************************************/

(function ( $ ) {
    // Fonction qui converti une date au format FR (jj/mm/aaa) en format US (aaaa-mm-jj)
    $.fn.dateFRtoUS=function(madate) {
        madate=explode("/",this);
        return madate[2]."-".madate[1]."-".madate[0];
    }

    // Fonction qui converti une date au format US (aaaa-mm-jj) en format FR (jj/mm/aaa)
    $.fn.dateUStoFR=function(madate) {
        madate=explode("-",this);
        return madate[2]."/".madate[1]."/".madate[0];
    }

}( jQuery ));

