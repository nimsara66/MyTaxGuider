import styled from 'styled-components'

const Wrapper=styled.main`{body{
    /* background: #bdc3c7;  fallback for old browsers */
    /* background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(to right, #2c3e50, #bdc3c7); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.form{
    /* background-color: #bdc3c7; */
    border-radius: 5px;
    width: 700px;
    margin: 20px auto;
    padding: 20px;
    /* height: 600px; */
}

.form-body{
    /* text-align: left; */
    padding: 20px 10px;
}

.form-body > *{
    padding: 5px;
}

.form__label{
    width: 40%;
    padding:5px;
    
}

.form_input{
    width: 60%;
}

.footer{
    text-align: center;
    background-color:gray;
}

}`

export default Wrapper