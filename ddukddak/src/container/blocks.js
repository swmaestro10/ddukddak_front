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
				output: 'String',
				colour: 210,
				tooltip: 'TrainData',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `training_num=${message} `;
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
				output: 'String',
				colour: 220,
				tooltip: 'TestData',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('NUM')}'` || '\'\'';
		const code = `test_num=${message} `;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};

// Category : Layer
const modelLayer = {
	name : 'ModelLayer',
	category : 'Layer',
	block : {
		init : function() {
			this.jsonInit({
				message0 : '학습 속도 %1',
				args0 : [{
					type : 'field_dropdown',
					name : 'SELECT',
					options : [
						["A","nn.ReLU"],
						["B","nn.LogSigmoid"],
					],
				},],
				output: 'String',
				colour : 165,
				tooltip : 'ModelLayer',
				nextStatement : null,
				previousStatement : null,
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `learning_rate = ${message} `;
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
				output: 'String',
				colour : 110,
				tooltip : 'LearningRate',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `learning_rate = ${message} `;
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
				output: 'String',
				colour : 120,
				tooltip : 'Epochs',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('SELECT')}'`;
		const code = `num_epochs = ${message} `;
		return [code, Blockly.Python.ORDER_ATOMIC];
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
					type : 'input_value',
					name : 'train',
				},{
					type : 'input_value',
					name : 'test',
				}],
				message1 : 'Model %1',
				args1 : [{
					type : 'input_statement',
					name : 'model',
				},],
				message2 : 'LearningRate %1 Epochs %2',
				args2 : [{
					type : 'input_value',
					name : 'rate',
				},{
					type : 'input_value',
					name : 'epoch',
				}],
				output: 'String',
				colour : 50,
				tooltip : 'Model',
			});
		},
	},
	generator : (block) => {
		const message = `'${block.getFieldValue('train')}'`;
		const code = `test_code`;
		return [code, Blockly.Python.ORDER_ATOMIC];
	},
};

const blocks =[
	trainData, 
	testData,
	modelLayer,
	learningRate,
	epochs,
	model
];
export {
	blocks
};