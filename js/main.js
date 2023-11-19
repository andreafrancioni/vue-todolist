/* Vue App Start */
const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            toDoList:[
                {
                    do: "Fai una passeggiata all'aperto: Respira aria fresca, goditi la natura e prenditi una pausa rilassante.",
                    done: false
                },
                {
                    do: "Leggi un libro che ti interessa: Scegli un libro che hai desiderato leggere o esplora nuovi argomenti per arricchire la tua mente.",
                    done: true
                },
                {
                    do: "Impara qualcosa di nuovo: Può essere una nuova lingua, una ricetta culinaria, un'abilità artistica o qualsiasi altra cosa che stimoli la tua curiosità.",
                    done: false
                },
                {
                    do: "Fai una telefonata o incontra un amico: Mantieni il contatto con le persone che ti stanno a cuore. Una conversazione può essere un modo gratificante per condividere esperienze e sentimenti.",
                    done: true
                },
                {
                    do: "Organizza il tuo spazio vitale: Dedica del tempo a riordinare e organizzare la tua casa o il tuo luogo di lavoro. Un ambiente ordinato può influire positivamente sul tuo stato d'animo e sulla tua produttività.",
                    done: false
                },
            ],

        }
    }
};

createApp(opzioni).mount('#app')