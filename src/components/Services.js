import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
export default function Services() {
    return (
        <section id="services-page">
            <div className="main-container" >
                <h1 class="sections-title">SERVICES</h1>
                <div class="services flex-container wrap"  id="services-firstchild">
                    <div class="bg-bk flex-item">
                        <StaticImage src="../images/services-1.png" alt="services-con"
                     
                        />
                        <p class="services-titles">UX design</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    <div class="flex-item">
                        <StaticImage src="../images/services/seo.png" alt="services-con"/>
                        <p class="services-titles ">UX design</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    <div class="bg-bk flex-item">
                        <StaticImage src="../images/services/internet.png" alt="services-con"/>
                        <p class="services-titles">UX design</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    {/* ajout ligne */}
                    <div class="flex-item">
                        <StaticImage src="../images/services/ecopense.png" alt="services-con"/>
                        <p class="services-titles">UX design</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    <div class="bg-bk flex-item">
                        <StaticImage src="../images/services/hebergement.png" alt="services-con"/>
                        <p class="services-titles">UX design</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
                    <div class="flex-item">
                        <StaticImage src="../images/services/internet.png" alt="services-con"/>
                        <p class="services-titles">UX design</p>
                        <p class="services-description sections-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit suspendisse amet, hendrerit sed turpis commodo, nulla amet, quisque.</p>
                    </div>
            
                </div>
                {/* <div class="services flex-container wrap">
               
                </div> */}
            </div>
        </section>
    )
}
