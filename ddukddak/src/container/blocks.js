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
		const code = `training_num=${message}`;
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
		const code = `test_num=${message}`;
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
						["느리게","0.0005"],
						["보통","0.001"],
						["빠르게","0.01"]
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
		const code = `learning_rate=${message}`;
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
		const code = `num_epochs=${message}`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	},
};
// model
const data_model = {
	name : 'data_Model',
	category : 'Data',
	block : {
		init : function() {
			this.appendValueInput('train').appendField('Train_Set');
			this.appendValueInput('test').appendField('Test_Set');
			this.setNextStatement(true);
			this.setColour(290);
			this.setTooltip('data_Model');
		},
	},
	generator : (block) => {
		const train = `${Blockly.JavaScript.valueToCode(block, 'train', Blockly.JavaScript.ORDER_ATOMIC) || ''}`;
		const test =  `${Blockly.JavaScript.valueToCode(block, 'test', Blockly.JavaScript.ORDER_ATOMIC) || ''}`;
		const code = `${train};${test};`;
		return code;
	},
};
const set_model = {
        name : 'set_Model',
        category : 'Training',
        block : {
                init : function() {
                        this.appendValueInput('rate').appendField('LearningRate');
                        this.appendValueInput('epoch').appendField('Epochs');
                        this.setPreviousStatement(true);
                        this.setColour(260);
                        this.setTooltip('training_Model');
                },
        },
        generator : (block) => {
                const rate = `${Blockly.JavaScript.valueToCode(block, 'rate', Blockly.JavaScript.ORDER_ATOMIC) || ''}`;
                const epoch =  `${Blockly.JavaScript.valueToCode(block, 'epoch', Blockly.JavaScript.ORDER_ATOMIC) || ''}`;
                const code = `${rate};${epoch};`;
                return code;
        },
};
// Category : Layer
const Layer = {
	name : 'Layer',
	category : 'modelLayer',
	block : {
		init : function() {
			this.appendValueInput("SELECT").appendField(new Blockly.FieldDropdown([["방법_A","nn_ReLU"], ["방법_B","nn_LogSigmoid"]]), "SELECT");
			this.setPreviousStatement(true, null);
    			this.setNextStatement(true, null);
    			this.setColour(165);
 			this.setTooltip("Layer");
		}
	},
	generator : (block) => {
		const message = `${block.getFieldValue('SELECT')}`;
		const code = `${message};`;
		return code;
	},
};
const modelLayer =  {
  name: 'modelLayer',
  category: 'modelLayer',
  block: {
    init: function () {
      this.appendStatementInput('DO')
          .appendField('Layer');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('modelLayer');
      this.setColour(330);
    },
  },
  generator: (block) => {
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
      branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
          '\'block_id_' + block.id + '\'') + branch;
    }
    return branch;
  },
};
const blocks =[
	data_model,
	trainData, 
	testData,
	modelLayer,
	Layer,
	set_model,
	learningRate,
	epochs
];
export {
	blocks
};
