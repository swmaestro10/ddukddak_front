//						{
//							type : 'input_dummy',
//						},
//						{
//							type : 'input_value',
//							name : 'number_b',
//							check : 'Number'
//						}
//					inputsInline : true,
//					output: 'String',
//					nextStatement : null,
//					previousStatement : null,
import Blockly from 'node-blockly/browser';

// Category : Data
const TrainData = {
	name : 'TrainData',
	category : 'Data',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 데이터 %1',
				args0 : [{
					type: 'field_input',
					name: 'NUM',
				},],
				colour: 210,
				tooltip: 'TrainData',
			});
		},
	},
	generator : (block) => {
		const num = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `training_num = ${num}<br />`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const TestData = {
	name : 'TestData',
	category : 'Data',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '테스트 데이터 %1',
				args0 : [{
					type: 'field_input',
					name: 'NUM',
				},],
				colour: 220,
				tooltip: 'TestData',
			});
		},
	},
	generator : (block) => {
		const num = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `test_num = ${num}<br />`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};

// Category : Layer
const ModelLayer1 = {
	name : 'ModelLayer1',
	category : 'Layer',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 방법 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["A 방법","nn.ReLU"],
						["B 방법","nn.LogSigmoid"]
					],					
				},],
				colour : 160,
				tooltip : 'ModelLayer1',
				nextStatement : null,
			});
		},
	},
	generator : (block) => {
		const model = `'${block.getFieldValue('SELECT')}'`;
		const code = `${model}<br />`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const ModelLayer2 = {
	name : 'ModelLayer2',
	category : 'Layer',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 방법 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["A 방법","nn.ReLU"],
						["B 방법","nn.LogSigmoid"]
					],					
				},],
				colour : 165,
				tooltip : 'ModelLayer2',
				nextStatement : null,
				previousStatement : null,
			});
		},
	},
	generator : (block) => {
		const model = `'${block.getFieldValue('SELECT')}'`;
		const code = `${model}<br />`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const ModelLayer3 = {
	name : 'ModelLayer3',
	category : 'Layer',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 방법 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["A 방법","nn.ReLU"],
						["B 방법","nn.LogSigmoid"]
					],					
				},],
				colour : 170,
				tooltip : 'ModelLayer3',
				previousStatement : null,
			});
		},
	},
	generator : (block) => {
		const model = `'${block.getFieldValue('SELECT')}'`;
		const code = `${model}<br />`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
 
// Category : Training
const LearningRate = {
	name : 'LearningRate',
	category : 'Training',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 속도 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["느리게","500"],
						["보통","1000"],
						["빠르게","2000"]
					],
				},],
				colour : 110,
				tooltip : 'LearningRate',
			});
		},
	},
	generator : (block) => {
		const select = `'${block.getFieldValue('SELECT')}'`;
		const code = `learning_rate = ${select}<br />`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const Epochs = {
	name : 'Epochs',
	category : 'Training',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '복습 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["한다","1"],
						["안한다","2"]
					],					
				},],
				colour : 120,
				tooltip : 'Epochs',
			});
		},
	},
	generator : (block) => {
		const select = `'${block.getFieldValue('SELECT')}'`;
		const code = `num_epochs = ${select}<br />`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};

const helloWorld =  {
    name: 'HelloWorld',
    category: 'Demo',
    block: {
      init: function () {
        this.jsonInit({
          message0: 'Hello %1',
          args0: [
            {
              type: 'field_input',
              name: 'NAME',
              check: 'String',
            },
          ],
          output: 'String',
          colour: 160,
          tooltip: 'Says Hello',
        });
      },
    },
    generator: (block) => {
      const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
      const code = `console.log('Hello ${message}')`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  };

const blocks =[
	TrainData, 
	TestData, 
	ModelLayer1, 
	ModelLayer2,
	ModelLayer3,
	LearningRate,
	Epochs,
	helloWorld
]
export {
	blocks
};