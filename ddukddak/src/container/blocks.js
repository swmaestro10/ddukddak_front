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
const trainData = {
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
		const message = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `'training_num=${message}<br />'`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const testData = {
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
		const message = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `'test_num=${message}<br />'`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};

// Category : Layer
const modelLayer1 = {
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
						["A","nn.ReLU"],
						["B","nn.LogSigmoid"]
					],					
				},],
				colour : 160,
				tooltip : 'ModelLayer1',
				nextStatement : null,
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `'${message}<br />'`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const modelLayer2 = {
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
						["A","nn.ReLU"],
						["B","nn.LogSigmoid"]
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
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `'${message}<br />'`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const modelLayer3 = {
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
						["A","nn.ReLU"],
						["B","nn.LogSigmoid"]
					],					
				},],
				colour : 170,
				tooltip : 'ModelLayer3',
				previousStatement : null,
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `'${message}<br />'`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
 
// Category : Training
const learningRate = {
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
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `'learning_rate = ${message}<br />'`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const epochs = {
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
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `'num_epochs = ${message}<br />'`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};
const helloWorld =  {
    name: 'train',
    category: 'Demo',
    block: {
      init: function () {
        this.jsonInit({
          message0: '학습 데이터 %1',
          args0: [
            {
              type: 'field_input',
              name: 'NAME',
            },
          ],
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
	trainData, 
	testData, 
	modelLayer1, 
	modelLayer2,
	modelLayer3,
	learningRate,
	epochs,
	helloWorld
]
export {
	blocks
};