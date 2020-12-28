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
            validField: false,
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
            validField: false,
            touched: false,
            errorMessage: [],
            type: "number",
            inputID: 'input4',
            controlName: "phone"
        }
    ]
}
