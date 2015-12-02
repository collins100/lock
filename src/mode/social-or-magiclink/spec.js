import { Mode } from '../index';
import AskSocialNetworkOrEmail from '../../cred/or/ask_social_network_or_email';
import { initSocial } from '../../social/index';

export default class SocialOrMagiclink extends Mode {

  constructor() {
    super("socialOrMagiclink");
  }

  willOpen(model, options) {
    model = model.set("forceRedirect", !options.popup);
    model = initSocial(model, options);
    this.setModel(model);
  }

  render() {
    return new AskSocialNetworkOrEmail();
  }

}
