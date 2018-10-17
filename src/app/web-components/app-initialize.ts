import { defineCustomElements as DCE1} from '@pdestrais/mdtohtml';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      DCE1(win);
    }
  };
}
