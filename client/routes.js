import React from 'react';
import { mount } from 'react-mounter';
import Home from './containers/home';
import Admin from './components/admin';
import ResetPassword from './containers/users/reset-password';

export default function(injectDeps, { FlowRouter, mainLayout, adminLayout }) {
  FlowRouter.route('/', {
    action() {
      mount(mainLayout, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/reset-password/:token', {
    action(params) {
      mount(mainLayout, {
        content: () => (<ResetPassword {...params} />)
      })
    }
  });

  FlowRouter.route('/admin', {
    triggersEnter: [(context, redirect) => {
      redirect('/admin/core');
    }],
  });
  FlowRouter.route('/admin/core', {
    action() {
      mount(adminLayout, {
        content: () => (<Admin />)
      });
    }
  });
}
