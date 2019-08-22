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
				output: 'String',
				colour: 210,
				tooltip: 'TrainData',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `training_num=${message} `;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
				output: 'String',
				colour: 220,
				tooltip: 'TestData',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `test_num=${message} `;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
				output: 'String',
				colour : 110,
				tooltip : 'LearningRate',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `learning_rate = ${message} `;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
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
						["한다","2"],
						["안한다","1"]
					],					
				},],
				output: 'String',
				colour : 120,
				tooltip : 'Epochs',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `num_epochs = ${message} `;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	},
};
// model
const model = {
	name : 'Model',
	category : 'Model',
	block : {
		init : function() {
			this.jsonInit({
				message0 : 'Train_Set %1 Test_Set %2',
				args0 : [{
					type : 'input_value', name : 'train',
				},{
					type : 'input_value', name : 'test',
				}],
				message1 : 'Model %1',
				args1 : [{
					type : 'input_statement', name : 'model',
				},],
				message2 : 'LearningRate %1 Epochs %2',
				args2 : [{
					type : 'input_value', name : 'rate',
				},{
					type : 'input_value', name : 'epoch',
				}],
				output : null,
				colour : 50,
				tooltip : 'Model',
			});
		},
	},
	generator : (block) => {
		const train = `${Blockly.JavaScript.valueToCode(block, 'train', Blockly.JavaScript.ORDER_ATOMIC) || ''}`;
		const test =  `${Blockly.JavaScript.valueToCode(block, 'test', Blockly.JavaScript.ORDER_ATOMIC) || ''}`;
		const rate = `${Blockly.JavaScript.valueToCode(block, 'rate', Blockly.JavaScript.ORDER_ATOMIC) || ''}`;
		const epoch =  `${Blockly.JavaScript.valueToCode(block, 'epoch', Blockly.JavaScript.ORDER_ATOMIC) || ''}`;
		const model = `${Blockly.JavaScript.statementToCode(block, 'model')}`;
		const code = `${train};${test};${rate};${epoch};${model}`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	},
};
// Category : Layer
const Layer = {
	name : 'modelLayer',
	category : 'modelLayer',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 방법 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["A","nn_ReLU"],
						["B","nn_LogSigmoid"],
					],
				},],
				colour : 165,
				tooltip : 'modelLayer',
				previousStatement: null,
				nextStatement: null,
			});
		},
	},
	generator : (block) => {
		const message = `${block.getFieldValue('SELECT')}`;
		const code = `${message}`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	},
};

const blocks =[
	model,
	trainData, 
	testData,
	Layer,
	learningRate,
	epochs
];
export {
	blocks
};
