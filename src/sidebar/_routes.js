import React from 'react';
import Tweets from '../tweets/tweets';



export const routes = [
    {
      path: '/tweet',
      exact: true,
      main: () => <Tweets />
    },

]