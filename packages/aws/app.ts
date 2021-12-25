// import

import type {Construct} from 'constructs';

import path from 'path';

import {Stack} from 'aws-cdk-lib';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';


import {App} from 'aws-cdk-lib';

// stacks

class MyStack extends Stack {
  func: NodejsFunction;

  constructor(scope: Construct, props: any) {
    super(scope, 'MyStack', props);

    // func

    this.func = new NodejsFunction(this, 'Func', {
      entry: path.resolve(__dirname, './func.ts'),
    });
  }
}

// run

const app = new App();
new MyStack(app, {});