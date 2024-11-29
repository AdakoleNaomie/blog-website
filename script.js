const mainonecontainer = document.querySelectorAll(".mainonecontainer")

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
mainonecontainer.forEach(mainonecontainer =>{
    observer.observe(mainonecontainer)
})

const card = document.querySelectorAll(".card")

const observer1 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
card.forEach(card =>{
    observer.observe(card)
})

const boxcontainer = document.querySelectorAll(".boxcontainer")

const observer2 = new IntersectionObserver(entries => {
    
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

        // the berlow commented code is for if you don't want the effect to be repetitive
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        console.log(entries)
    })
}, {
    // threshold: 1,
    rootMargin:"-100px",
})
boxcontainer.forEach(boxcontainer =>{
    observer.observe(boxcontainer)
})
