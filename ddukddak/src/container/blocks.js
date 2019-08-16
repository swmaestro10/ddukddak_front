import Blockly from 'node-blockly/browser';

const helloWorld = {
    name: 'HelloWorld',
    category: 'Demo',
    block: {
      init: function () {
        this.jsonInit(
		{
          message0: 'Hello %1',
          args0: [{
              type: 'field_input',
              name: 'NAME',
			  check: 'String', 
			},],
          output: 'String',
          colour: 160,
          tooltip: 'Says Hello',
		}
		);
      },
    },
    generator: (block) => {
	  const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
	  const code = `console.log('Hello ${message}')`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  };

const test_print = {
	name : 'test_print',
	category : 'test',
	block : {
		init : function() {
			this.jsonInit(
				{
						message0 : 'print %1',
						args0 : [{
							type : 'field_input',
							name : 'PRINT',
						},],
						output : 'String',
						colour : 100,
						tooltip : 'print(_)',
				}
			);
		},
	},
    generator: (block) => {
		const message = `'${block.getFieldValue('PRINT')}'` || '\'\'';
		const code = `print(${message})`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	  },  
};
const test_operation = {
	name : 'test_operation',
	category : 'test',
	block : {
		init : function(){
			this.jsonInit(
				{
					message0 : '%1',
					args0 : [{
						type : 'field_dropdown',
						name : 'select',
						options : [
							["+","+"],["-","-"],["*","*"],["/","/"]
						],
					},],
					output : 'String',
					colour : 120,
					tooltip : '+-*/',
				}
			);
		},
	},
	generator: (block) => {
		const message = `'${block.getFieldValue('select')}'`;
		const code = `${message}`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},	
};

const short_math = {
	name : 'short_math',
	category : 'test',
	block : {
		init : function(){
			this.jsonInit(
				{
					message0 : '%1 %2 = %3 %4',
					args0 : [
						{
							type : 'input_value',
							name : 'number_a',
							check : 'Number'
						},
						{
							type : 'field_dropdown',
							name : 'select_one',
							options : [
								["+","+"],["-","-"],["*","*"],["/","/"]
							],
						},
						{
							type : 'input_dummy',
						},
						{
							type : 'input_value',
							name : 'number_b',
							check : 'Number'
						}
					],
					output : 'String',
					colour : 360,
					tooltip : 'short version of arithmetic calculations',
					inputsInline : true,
//					nextStatement : null,
//					previousStatement : null,
				}
			);
		},
	},
	generator: (block) => {
		const num_1 = `'${block.getFieldValue('number_a')}'`; 
		const num_2 = `'${block.getFieldValue('number_b')}'`;
		const sel = `'${block.getFieldValue('select_one')}'`;
		const code = num_1+sel+"= "+num_2;
		return [code, Blockly.JavaScript.ORDER_MEMBER];
	},
};

export {
    helloWorld,
    test_print,
    test_operation,
    short_math
};