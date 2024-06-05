export const API_KEY = 'AIzaSyC53brFiPz4RGJ-42CJA9vfv3iNV3G_BNc'

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if (value >= 1000) {
        return Math.floor(value/1000) + "K";
    }else{
        return value;
    }
}