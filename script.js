const form = document.querySelector('#form1');
form.addEventListener('submit' , getFormvalue);
function getFormvalue(e)
{
    e.preventDefault();
    const formData = new FormData(this);
    alert(`${formData.get('fname')} ${formData.get('lname')}`);
}