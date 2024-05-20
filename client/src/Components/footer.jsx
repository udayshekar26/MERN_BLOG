import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className=" w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-col-1">
          <div
            className="mt-5
            "
          >
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Uday's
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4  sm:grid-cols-3 sm:gap-6">
            <div className="">

            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://www.100jsprojects.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                100 JS Projects
              </Footer.Link>
              <Footer.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                100 JS Projects
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div className="">
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://www.github.com/udayshekar26"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Footer.Link>
              <Footer.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div className="">
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </Footer.Link>
              <Footer.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>  
        <div className=" w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Uday" year={new Date().getFullYear()}/>
            <div className=" flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsTwitter}/>
                <Footer.Icon href="https://www.github.com/udayshekar26" icon={BsGithub}/>
            </div>
        </div>

      </div>
    </Footer>
  );
}

export default FooterCom;
