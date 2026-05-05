export const observerReveal = (target, classAdd, percent = 0.3)=>{
    const elements = document.querySelector(`.${target}`);
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const classArray = classAdd.split(' ');

                entry.target.classList.add(...classArray);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: percent,
    });
    observer.observe(elements);
}

/* for child */
export const observerRevealChild = (target, classAdd, percent = 0.3) => {
    const element = document.querySelector(`.${target}`); // Usiamo la classe anziché l'ID
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                console.log(entry.isIntersecting);
                // Seleziona tutti i figli del contenitore principale
                const children = entry.target.children;
                const classArray = classAdd.split(' ');

                // Applica le classi a ciascun figlio
                Array.from(children).forEach(child => {
                    child.classList.add(...classArray);
                });

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: percent,
    });
    
    if (element) {
        observer.observe(element);
    }
}
