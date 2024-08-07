const handleData = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let color = document.getElementById('color').value;
    let category = document.getElementById('category').value;
    let quantity = document.getElementById('quantity').value;
    let price=document.getElementById('price').value;
    let user = {
        name:name,
        email:email,
        number:number,
        password:password,
        gender:gender,
        city:city
    }
