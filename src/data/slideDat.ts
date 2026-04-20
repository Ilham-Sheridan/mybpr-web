export interface SlideData {
    id: string;
    title: string;
    description?: string;
    subcat?: string;
    images: {
        src: string;
        alt?: string;
        pos?: string;
        style?: string; //lazy fuck solution
    }
    button?: slideButtons[];
    isDisabled?: boolean;
}

export interface slideButtons {
    text: string;
    styleInvert: boolean;
    //action: () => void;
    href: string;
}

export const slides_dat: SlideData[] = [

    {
        id: "kredit",
        title: "Butuh dana cepat?",
        description: "Dengan Plafond hingga 3M Kredit Express, dapatkan pencairan dana hanya dalam 3-5 hari!",
        subcat: "Kredit",
        images: { src: '/mybpr-web/imgs/webview/pexels-jakubzerdzicki-29175271.jpg' },
    },
    {
        id: "tabungan",
        title: "Mulai menabung di Mybpr",
        description: "Bukan hanya main-main simpan saja, tapi membuat kebiasaan. Hingga pada saatnya dana dibutuhkan, Anda tetap tenang.",
        images: { src: '/mybpr-web/imgs/webview/pexels-jan-van-der-wolf-11680885-19503589.jpg' },
        subcat: "Tabungan",
        // button: [
        //     {
        //         text: "Button 1",
        //         styleInvert: false,
        //         href: "#"
        //     },
        //     {
        //         text: "Button 2",
        //         styleInvert: true,
        //         href: "#"
        //     }
        // ]
    },
    {
        id: "tabungan",
        title: "Sudahkah simpanan Anda dikelola secara terencana?",
        description: "Deposito di Mybpr hadir untuk membantu Anda mengelola dana secara bijak dan terarah.",
        subcat: "Deposito",
        images: { src: '/mybpr-web/imgs/webview/pexels-iitsbruna-29099973.jpg' },
    },
    {
        id: "slogan",
        title: "Solusi Keuangan Anda",
        description: "Welcome to Mybpr",
        // subcat: "Subcategory 1",
        images: { src: '/mybpr-web/imgs/webview/pexels-diva-34310968.jpg' },
    },
];