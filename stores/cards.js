import {defineStore} from "pinia";


const STORE_NAME = 'cards'
export const useCardsStore = defineStore(STORE_NAME, () => {


    const data = [
        {
            id: 1,
            src: '/img/Img.png',
            title: 'Дмитрий Хитрый',
            post: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
            guaranties: {
                feedbacks: 2,
                rating: 4.9,
                docs: true
            }
        },
        {
            id: 2,
            src: '/img/Img-1.png',
            title: 'Александр Закопов',
            post: 'Помог справиться с потерей и организовать похороны для 126 семей ',
            guaranties: {
                feedbacks: 1,
                rating: 3.5,
                docs: true
            }
        },
        {
            id: 3,
            src: '/img/Img-2.png',
            title: 'Василиса Землеперекопская',
            post: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
            guaranties: {
                feedbacks: 19,
                rating: 3.9,
                docs: true
            }
        }
    ];


    return {data}
})