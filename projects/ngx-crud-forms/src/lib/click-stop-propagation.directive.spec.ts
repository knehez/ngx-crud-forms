import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

describe('ClickStopPropagationDirective', () => {

  let directive;

  beforeEach(() => {
    directive = new ClickStopPropagationDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should stop propagation of event', () => {
    const event = new Event('click');
    const stopPropagationSpy = spyOn(event, 'stopPropagation');

    directive.onClick(event);

    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});
