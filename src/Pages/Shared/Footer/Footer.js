import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from '../../../assets/Footer.png'

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundImage: `url(${footerImage})` }} className="footer p-10 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-info absolute top-0 right-0 rounded-l-none">Send</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 text-base-content">
                <div className=' dark:text-white'>
                    <p>Copyright © 2022 - All right reserved by ResaleXpress</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;