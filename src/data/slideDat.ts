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
        id: "slide1",
        title: "title",
        description: "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
        subcat: "Subcategory 1",
        images: { src: '/imgs/1.JPG' },
    },
    {
        id: "slide2",
        title: "Elaborate title",
        description: "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
        subcat: "Subcategory 2",
        images: { src: '/imgs/2.jpeg' },
    },
    {
        id: "slide3",
        title: "Even more notoriously elaborate title",
        description: "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
        images: { src: '/imgs/3.jpeg' },
        button: [
            {
                text: "Button 1",
                styleInvert: false,
                href: "#"
            },
            {
                text: "Button 2",
                styleInvert: true,
                href: "#"
            }
        ]
    },
    {
        id: "slide4",
        title: "absurdly and atrociously long and elaborate title lorem ipsum dolor sit",
        description: "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
        subcat: "Subcategory 99",
        images: { src: '/imgs/1.JPG' },
    },
];