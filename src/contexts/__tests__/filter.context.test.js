import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import DirectionFilter from "../../component/filters/DirectionFilter";
import {DIRECTION} from '../../constants';
import { FilterProvider, FilterContext, useFilter } from "../filter.context";

const customRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <FilterProvider {...providerProps}>{ui}</FilterProvider>,
    renderOptions,
  )
}

describe('Filter Provider', () => {

  describe('direction', () => {
    it('initial render ascendent', () => {
      const providerProps = {}
      customRender(
        <FilterContext.Consumer>
          {(context) => (
            <span>{context.direction}</span>
          )}
        </FilterContext.Consumer> , {providerProps});
      expect(screen.getByText(DIRECTION.SORT_DIRECTION_ASC)).toBeTruthy();
    })
    it('render ascendent', ()=> {
      const providerProps = {
        direction: DIRECTION.SORT_DIRECTION_ASC,
      }
      customRender(
        <FilterContext.Consumer>
          {(context) => (
            <span>{context.direction}</span>
          )}
        </FilterContext.Consumer> , {providerProps});
      expect(screen.getByText(DIRECTION.SORT_DIRECTION_ASC)).toBeTruthy();

    });
    it('render descendent', ()=> {
      const providerProps = {
        direction: DIRECTION.SORT_DIRECTION_DESC,
      }
      customRender(
        <FilterContext.Consumer>
          {(context) => (
            <span>{context.direction}</span>
          )}
        </FilterContext.Consumer> , {providerProps});
       expect(screen.getByText(DIRECTION.SORT_DIRECTION_DESC)).toBeTruthy();
    });
    it('Should change to DESC after clicking event', async () =>{
      const providerProps = {
        direction: DIRECTION.SORT_DIRECTION_ASC,
      }
      customRender(
        <FilterContext.Consumer>
           {(context) => (
             <>
               <span>{context.direction}</span>
               <button onClick={context.toggleDirection}></button>
             </>
          )}
        </FilterContext.Consumer> , {providerProps});
      fireEvent.click(screen.getByRole('button'))
      expect(screen.getByText(DIRECTION.SORT_DIRECTION_DESC)).toBeInTheDocument(); 
    })
  });

  describe('sortBy', () => {
    it('initial render as type', () => {
      const providerProps = {}
      customRender(
        <FilterContext.Consumer>
          {(context) => (
            <span>{context.sortBy}</span>
          )}
        </FilterContext.Consumer> , {providerProps});
      expect(screen.getByText('type')).toBeTruthy();
    })
  })
})

