import React from 'react'
import image1 from '../images/field-932765.jpg'
const Contact = () => {
    return (
        <div className="row contact mx-32">
            <div className="col-md-6  ">
                <img className='img-contact'
                    src={image1}
                    alt="contact"

                />
            </div>
            <div className="col-md-6">
                <h2 className="align-middle mt-2 text-2xl">WE ARE GREEN_NINJAS</h2>
                <p className="text-justify  mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                    officiis obcaecati esse tempore unde ratione, eveniet mollitia,
                    perferendis eius temporibus dicta blanditiis doloremque explicabo
                    quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
                    accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
                    commodi illum quidem neque tempora nam.
                </p>
            </div>
        </div>
    )
}

export default Contact