import React, {useState, useEffect} from 'react';

//this is form starter for cars?

// ❗ The ✨ TASKS inside this component are NOT IN ORDER.
// ❗ Check the README for the appropriate sequence to follow.

const instructions = [
  `'Yooo, just answer some quick questions and I'll find the car you should be driving right now!'`,
  `First off, what kind of driver are you?`,
  `How much bread are you willing to break?`,
  `Which would you rather pick?`,
  `Which color looks best on a car?`
]
const e = { // This is a dictionary of validation error messages.
  // username
  usernameRequired: 'username is required',
  usernameMin: 'username must be at least 3 characters',
  usernameMax: 'username cannot exceed 20 characters',
  // favLanguage
  favLanguageRequired: 'favLanguage is required',
  favLanguageOptions: 'favLanguage must be either javascript or rust',
  // favFood
  favFoodRequired: 'favFood is required',
  favFoodOptions: 'favFood must be either broccoli, spaghetti or pizza',
  // agreement
  agreementRequired: 'agreement is required',
  agreementOptions: 'agreement must be accepted',
}

// ✨ TASK: BUILD YOUR FORM SCHEMA HERE





// The schema
const initialValues = () => ({driverType: '', price: '', decision: '', color: '', agreement: false})
export function App() {
  // ✨ TASK: BUILD YOUR STATES HERE
  // You will need states to track (1) the form, (2) the validation errors,
  // (3) whether submit is disabled, (4) the success message from the server,
  // and (5) the failure message from the server.
  const [formValues, setFormValues] = useState(initialValues())
  const [enabled, setEnabled] = useState(false)
  
  // ✨ TASK: BUILD YOUR EFFECT HERE
  // Whenever the state of the form changes, validate it against the schema
  // and update the state that tracks whether the form is submittable.


useEffect(() => {
  const myCar = document.querySelector('img')
  myCar.height = 300
  console.log(myCar)
  console.log(formValues.driverType)
  console.log(formValues.price)
  if(formValues.driverType === 'suv'){            //if user picks "Family Hauler"
      if(formValues.price === '10000'){
        myCar.src = 'https://www.motortrend.com/uploads/sites/10/2015/11/2012-ford-edge-se-suv-angular-front.png'
      }else if(formValues.price === '50000'){
        myCar.src = 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/52591/2024-Chevrolet-Blazer-front_52591_032_1845x830_GBA_cropped.png'

      }else{
        myCar.src = 'https://www.pngall.com/wp-content/uploads/8/Black-SUV.png'
      }
  }else if(formValues.driverType === 'sedan'){    //if user picks "Looking for first Car"
    if(formValues.price === '10000'){
      myCar.src = 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/10543/2016-Chevrolet-Malibu%20Limited-front_10543_032_1782x747_GAZ_cropped.png'
    }else if(formValues.price === '50000'){
      myCar.src = 'https://tmna.aemassets.toyota.com/is/image/toyota/lexus/images/models/es/2022/styles/Lexus-ES-250-AWD-visualizer-styles-750x471-LEX-ESG-MY22-0026-04.png?wid=750&hei=471&fmt=png-alpha'
    }else{
    myCar.src = 'https://platform.cstatic-images.com/in/v2/stock_photos/c7c546b0-2fd3-4538-bb09-309e7e1de088/b8cc98e3-1763-4c07-999e-10dbcde6ccdf.png'
    }

  }else if(formValues.driverType === 'truck'){      //if user pick "Truck guy/gal"
    if(formValues.price === '10000'){
      myCar.src = 'https://edgecast-img.yahoo.net/mysterio/api/44500273BDF0C49DD0550886025DC58FC65563A234EB211273A27192B507ED3F/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAB30GMT172B0101.jpg'
    }else if(formValues.price === '50000'){
      myCar.src = "https://file.kelleybluebookimages.com/kbb/base/evox/CP/53061/2024-GMC-Sierra%201500%20Crew%20Cab-front_53061_032_1832x832_GBA_cropped.png"
    }else{
    myCar.src = 'https://streetsmn.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/01/f-150-2009-500x375.png'
    }

  }else if(formValues.driverType === 'fast car'){
    myCar.src="https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/ds0xhQ_U4v4zB_mzmGAe3B6cNdyiTCcogF7UGJNFvJan1Blx9hu33U60fQh3UJi3iF1b7dCgXA-F1S1iNkm_kO4Q6OGejA_VIWlNNEZl76MYhkNqs9LzvCLxUfNWvXillRuSejXp6oPsOmFFQAENm-T2yiszoPbO1rShJFDSSDnxHJy116moug/cc_2023DOC190122_01_640_PSE.png"
  }
}, [formValues])


  const onChange = evt => {
    // ✨ TASK: IMPLEMENT YOUR INPUT CHANGE HANDLER
    // The logic is a bit different for the checkbox, but you can check
    // whether the type of event target is "checkbox" and act accordingly.
    // At every change, you should validate the updated value and send the validation
    // error to the state where we track frontend validation errors.
    let {value, name, checked, type} = evt.target
    value = type === 'checkbox'? checked : value
    setFormValues(() => ({...formValues, [name] : value}))
  }

  const onSubmit = evt => {
    // ✨ TASK: IMPLEMENT YOUR SUBMIT HANDLER
    // Lots to do here! Prevent default behavior, disable the form to avoid
    // double submits, and POST the form data to the endpoint. On success, reset
    // the form. You must put the success and failure messages from the server
    // in the states you have reserved for them, and the form
    // should be re-enabled.
    
  }

  return (
    <div className='container'> 
      <h2>🏎 Let's find your lucky car! 🏎</h2>
      <form onSubmit={onSubmit}>
        <h4> {instructions[0]} </h4>
        <h5 >-Some "chanceofluck" guy lol but let me put you on...</h5>

        <div>
          <label htmlFor="driverType">{instructions[1]}</label>
          <select onChange={onChange} id="driverType" name="driverType">
            <option value="">-- Select Driver Type --</option>
            <option value="suv">Family Hauler</option>
            <option value="sedan">Looking for first Car</option>
            <option value="truck">Truck guy/gal</option>
            <option value="fast car">Need for Speed</option>
          </select>
 
        </div>


        <div className="inputGroup">
          <label htmlFor="price">{instructions[2]}</label>
          <select onChange={onChange} id="price" name="price">
            <option value="">-- Nothing over... --</option>
            <option value="10000">$10,000</option>
            <option value="20000">$20,000 (recommended)</option>
            <option value="50000">$50,000</option>
            <option value="80000">I'm tryna ball out</option>
          </select>
 
        </div>

        <div className="inputGroup">
          <label htmlFor="decision">{instructions[3]}</label>
          <select onChange={onChange} id="decision" name="decision">
            <option value="">------- Pick one -------</option>
            <option value="money">money</option>
            <option value="family">family</option>
            <option value="yourself">yourself</option>
          
          </select>
 
        </div>

        <div className="inputGroup" >
          <label  htmlFor="color">{instructions[4]}</label>
          <select onChange={onChange} id="color" name="color" >
            <option value="">------- Pick one -------</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          
          </select>
 
        </div>


        <div className="inputGroup">
          <label>
            <input onChange={onChange} id="agreement" type="checkbox" name="agreement" />
            Agree to our terms
          </label>
    
        </div>

        <div>
          <input type="submit" disabled={false} />
        </div>
      </form>

      <img alt='Car' height='500' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLHVv5VGF1afN5haKbbyV0RopEkE0n4rqQIt0cAX2FA&s'></img>
    </div>
  )
}

export default App
