// const buttons = document.querySelectorAll('button');

// buttons.forEach( button =>{
//     button.addEventListener('click',()=>{
//         const faq = button.nextElementSibling;

//         faq.classList.toggle('show');
//     })
// } )
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
       sidebar.style.display= 'flex'
   }
function hideSidebar(){
       const sidebar = document.querySelector('.sidebar')
       sidebar.style.display= 'none'
   }

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the FAQ paragraph associated with the clicked button
        const faq = button.nextElementSibling;

        // Close all other FAQ sections
        document.querySelectorAll('.question p').forEach(p => {
            // Only close the FAQ if it's not the one that was clicked
            if (p !== faq) {
                p.classList.remove('show');
            }
        });

        // Toggle the current FAQ section
        faq.classList.toggle('show');
    });
});
