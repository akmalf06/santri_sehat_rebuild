import React, { Component } from 'react';
import { userIcon, keyIcon } from '../icons';
import FormItemText from '../components/FormItemText';
import RoundSubmitButton from '../components/RoundSubmitButton';
import santri from '../images/santri.svg';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: santri
        };
    }

    render() {
        return (
            <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full box-border lg:w-6/12 mb-3 lg:mb-0 flex flex-row items-center justify-center">
                    <img src={santri} alt="gambar santri" className="py-12 w-10/12" />
                </div>
                <div className="w-full lg:w-6/12 flex flex-row items-center mb-5 justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="uppercase font-bold text-xl block mb-6">Santri Login</h3>
                        <FormItemText icon={userIcon()} name='nomor_induk' placeholder='Nomor Induk' type='text'/>
                        <FormItemText icon={keyIcon()} name='password' placeholder='Password' type='password'/>
                        <RoundSubmitButton value='Login'/>
                        <div class="w-72 py-3 px-2">
                            <p class="text-center">
                                Silahkan menuju menu <a href="#" class="text-blue-700"><span>pengaduan</span></a> apabila lupa kata sandi
                            </p>
                        </div>
                        {/* <form action="" method="POST" className="flex flex-col justify-center items-center">
                        </form> */}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Login
