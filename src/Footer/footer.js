import React from "react";
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-card">
                <h4>bigbasket</h4>
                <ul>
                    <li>About Us</li>
                    <li>In News</li>
                    <li>Green bigbasket</li>
                    <li>Privacy policy</li>
                    <li>Affiliate</li>
                    <li>Terms and Conditions</li>
                    <li>Careers At bigbasket</li>
                    <li>bb Insant</li>
                    <li>bbDaily</li>
                    <li>bb Blog</li>
                    <li>bbnow</li>
                </ul>
            </div>
            <div className="footer-card">
                <h4>Help</h4>
                <ul>
                    <li>FAqs</li>
                    <li>contact Us</li>
                    <li>bb wallet FAQs</li>
                    <li>bb Wallet T&Cs</li>
                    <li>Vendor Connect</li>
                </ul>
            </div>
            <div className="footer-card">
                <h4>Download Our App</h4>
                <ul>
                    <li><img src={require('../Assest/Google-App-store-icon.webp')} alt={'no image'}/></li>
                    <li><img src={require('../Assest/Apple-App-store-icon.png')} alt={'no image'}/></li> 
                </ul>
            </div>
            <div className="footer-card">
                <h4>Get Social With Us</h4>
                <div className="footer-icons">
                    <div className="footer-icon facebook">
                        <FacebookIcon/>
                    </div>
                    <div className="footer-icon pinterest">
                        <PinterestIcon/>
                    </div>
                    <div className="footer-icon twitter">
                        <TwitterIcon/>
                    </div>
                    <div className="footer-icon instagram">
                        < InstagramIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;  