
const initialState = {
    unitCertificates : {
        1:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        2:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        3:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        4:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        5:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        6:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        7:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        8:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        9:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0},
        10:{'MFG':0,'TECH':0,'MFG2':0, 'TECH2':0, 'QA':0, 'INSP':0,'CUST':0}
    },
    currentUnit: 1
    
}
const CertificateReducer =(state= initialState, action)=>{ 
    switch(action.type){
        case 'SET_UNIT':
            return {
                ...state,
                currentUnit: action.payload
            };
        case 'ADD_DATA':
            return{
                ...state,
                unitCertificates:{
                    ...state.unitCertificates,
                    [state.currentUnit]:{
                        ...state.unitCertificates[state.currentUnit],
                        [action.payload.certName]:action.payload.certVal
                    }
                }
            }
        default:
            return state;
    }
    return state;

}

export default CertificateReducer;