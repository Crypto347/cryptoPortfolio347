export const getContactFormPageSection1InputForm = {
    formIsValid: false,
    inputsArray: [
        {
            id: 1,
            inputFieldName: "Full Name",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Full Name'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'input1',
            controlName: "fullName"
        },
        {
            id: 2,
            inputFieldName: "Company",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Company'
            },
            value: '',
            validation: [
                // {
                //     required: true,
                //     valid: false
                // }
            ],
            validField: true,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'input2',
            controlName: "company"
        },
        { 
            id: 3,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Email'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'input3',
            controlName: "email"
        },
        {
            id: 4,
            inputFieldName: "Telephone",
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: ' Telephone',
                // options: [...countriesArray]
            },
            value: '',
            validation: [
                // {
                //     required: true,
                //     valid: false
                // }
            ],
            validField: true,
            touched: false,
            errorMessage: [],
            type: "number",
            inputID: 'input4',
            controlName: "phone"
        }
    ]
}

export const getContactFormPageSection2InputForm = {
    formIsValid: false,
    inputsArray: [
        { 
            id: 5,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Email*'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'input5',
            controlName: "email"
        }
    ]
}

export const getContactFormPageSection3InputForm = {
    formIsValid: false,
    inputsArray: [
        { 
            id: 5,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Enter your email*'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'input6',
            controlName: "email"
        }
    ]
}

export const blogListStandardInputForm = {
    formIsValid: false,
    inputsArray: [
        { 
            id: 1,
            inputFieldName: "Search",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Search...'
            },
            value: '',
            validation: [],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'input1',
            controlName: "search"
        }
    ]
}