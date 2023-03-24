import { createReducer, on } from "@ngrx/store";
import { FormElement, FormBuilderState } from "src/app/ts/interfaces";
import { 
  addFormElement, 
  removeFormElement, 
  updateFormElement,
  addOption,
  removeOption,
  updateGeneralForm,
  swapFormElements,
} from "./formbuilder.actions";

export const initialState: FormBuilderState = {
  formElements: [],
  generalForm: {
    heading: 'Form Builder',
    borderWidth: '1',
    borderColor: '#cccccc',
    borderStyle: 'solid', 
    fontSize: 20,
    fontWeight: 500,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
}

const sortNewElement = (arr: FormElement[], index: number, newElement: FormElement) => {
  const copyArr = arr.slice();

  for (let i = copyArr.length; i > index; i--) {
    copyArr[i] = copyArr[i-1];
  }
  copyArr[index] = newElement
  return copyArr
}

const sortElements = (arr: FormElement[], index1: number, index2: number ) => {
  const results = arr.slice();
  // from start index to new index
  const temp = results[index1];
 
  if (index1 < index2) {
    for (let i = index1; i < index2; i++) {
      results[i] = results[i+1]
    }
  } else {
    for (let i = index1; i > index2; i--) {
      results[i] = results[i-1]
    }
  }
  results[index2] = temp
  return results
}

export const formBuilderReducer = createReducer(
  initialState,
  on(addFormElement, (state, { element, index }) => ({
    ...state,
    formElements: sortNewElement(state.formElements, index, element)
  })),
  on(removeFormElement, (state, { id }) => ({
    ...state,
    formElements: state.formElements.filter((el) => el.id !== id)
  })),
  on(updateFormElement, (state, { elementId, key, val }) => ({
    ...state,
    formElements: state.formElements.map((item) => {
      if ( item.id !== elementId ) {
        return item
      }
      return {
        ...item,
        [key]: val,
      }
    })
  })),
  on(swapFormElements, (state, { index1, index2 }) => ({
    ...state,
    formElements: sortElements(state.formElements, index1, index2),
  })),
  on(addOption, (state, { selectId, content }) => ({
    ...state,
    formElements: state.formElements.map((item) => {
      if ( item.id !== selectId ) {
        return item
      }
      return {
        ...item,
        options: item.options?.concat({id: Date.now().toString(), content}),
      }
    })
  })),
  on(removeOption, (state, { selectId, optionId }) => ({
    ...state,
    formElements: state.formElements.map((item) => {
      if ( item.id !== selectId ) {
        return item
      }
      return {
        ...item,
        options: item.options?.filter((el) => el.id !== optionId)
      }
    })
  })),
  on(updateGeneralForm, (state, { key, val }) => ({
    ...state,
    generalForm: {
      ...state.generalForm,
      [key]: val,
    }
  })),
)