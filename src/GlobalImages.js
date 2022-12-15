import coming from './images/ComingSoon.png';
import Richard from './images/Richard.png';
import Irwing from './images/Irwing.jpg';
import Luis from './images/Luis.jpg';
import Samuel from './images/Samuel.jpg';
import Dylan from './images/Dylan.jpg';
import logoWeb from './images/BaroCapitalLogoWeb.png'
import linea from './images/Linea.png'

function img(img) {

    switch (img) {
        case "coming": return coming;
        case "Richard": return Richard;
        case "Irwing": return Irwing;
        case "Luis": return Luis;
        case "Samuel": return Samuel;
        case "Dylan": return Dylan;
        case "logoWeb": return logoWeb;
        case "linea": return linea;
    }
}

export default img;