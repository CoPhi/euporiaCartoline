// Generated from Hippolytus.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var HippolytusListener = require('./HippolytusListener').HippolytusListener;
var grammarFileName = "Hippolytus.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003#\u019e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0003\u0002\u0006\u0002R\n\u0002",
    "\r\u0002\u000e\u0002S\u0003\u0002\u0005\u0002W\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003^\n\u0003\r\u0003",
    "\u000e\u0003_\u0003\u0003\u0005\u0003c\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007s\n\u0007\u0005\u0007u\n\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0007\t|\n\t\f\t\u000e\t\u007f\u000b\t\u0003\n\u0003\n\u0007",
    "\n\u0083\n\n\f\n\u000e\n\u0086\u000b\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u008b\n\n\u0003\u000b\u0005\u000b\u008e\n\u000b\u0003\u000b\u0005",
    "\u000b\u0091\n\u000b\u0003\u000b\u0005\u000b\u0094\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0005\f\u0099\n\f\u0003\f\u0005\f\u009c\n\f\u0003",
    "\f\u0003\f\u0003\r\u0005\r\u00a1\n\r\u0003\r\u0005\r\u00a4\n\r\u0003",
    "\r\u0003\r\u0005\r\u00a8\n\r\u0003\u000e\u0005\u000e\u00ab\n\u000e\u0003",
    "\u000e\u0005\u000e\u00ae\n\u000e\u0003\u000e\u0005\u000e\u00b1\n\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u00b5\n\u000e\u0003\u000f\u0003",
    "\u000f\u0006\u000f\u00b9\n\u000f\r\u000f\u000e\u000f\u00ba\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0005\u0011\u00c2\n",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00c6\n\u0011\u0003\u0011",
    "\u0005\u0011\u00c9\n\u0011\u0003\u0012\u0005\u0012\u00cc\n\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00d1\n\u0012\u0005\u0012",
    "\u00d3\n\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0006\u0015\u00da\n\u0015\r\u0015\u000e\u0015\u00db\u0003\u0016",
    "\u0005\u0016\u00df\n\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00e3",
    "\n\u0016\u0003\u0016\u0005\u0016\u00e6\n\u0016\u0003\u0016\u0005\u0016",
    "\u00e9\n\u0016\u0003\u0017\u0003\u0017\u0007\u0017\u00ed\n\u0017\f\u0017",
    "\u000e\u0017\u00f0\u000b\u0017\u0003\u0018\u0006\u0018\u00f3\n\u0018",
    "\r\u0018\u000e\u0018\u00f4\u0003\u0019\u0005\u0019\u00f8\n\u0019\u0003",
    "\u0019\u0005\u0019\u00fb\n\u0019\u0003\u0019\u0005\u0019\u00fe\n\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019",
    "\u0105\n\u0019\u0003\u0019\u0007\u0019\u0108\n\u0019\f\u0019\u000e\u0019",
    "\u010b\u000b\u0019\u0003\u0019\u0007\u0019\u010e\n\u0019\f\u0019\u000e",
    "\u0019\u0111\u000b\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0007\u001b\u011e\n\u001b\f\u001b\u000e\u001b\u0121\u000b",
    "\u001b\u0005\u001b\u0123\n\u001b\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0007\u001d\u012a\n\u001d\f\u001d\u000e\u001d",
    "\u012d\u000b\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0007\u001f\u0135\n\u001f\f\u001f\u000e\u001f\u0138",
    "\u000b\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u013d\n",
    "\u001f\u0003\u001f\u0005\u001f\u0140\n\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0005\u001f\u0146\n\u001f\u0003\u001f\u0005",
    "\u001f\u0149\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f",
    "\u014e\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0153",
    "\n\u001f\u0005\u001f\u0155\n\u001f\u0007\u001f\u0157\n\u001f\f\u001f",
    "\u000e\u001f\u015a\u000b\u001f\u0007\u001f\u015c\n\u001f\f\u001f\u000e",
    "\u001f\u015f\u000b\u001f\u0003 \u0003 \u0003 \u0005 \u0164\n \u0003",
    " \u0003 \u0003 \u0005 \u0169\n \u0005 \u016b\n \u0003 \u0007 \u016e",
    "\n \f \u000e \u0171\u000b \u0003!\u0006!\u0174\n!\r!\u000e!\u0175\u0003",
    "\"\u0003\"\u0006\"\u017a\n\"\r\"\u000e\"\u017b\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003$\u0005$\u0183\n$\u0003$\u0003$\u0003$\u0005$\u0188\n",
    "$\u0003$\u0003$\u0005$\u018c\n$\u0003%\u0003%\u0003%\u0003%\u0005%\u0192",
    "\n%\u0003&\u0003&\u0003&\u0003&\u0005&\u0198\n&\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003(\u0002\u0002)\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLN\u0002",
    "\u0006\u0003\u0002\u0006\u0007\u0004\u0002\u0014\u0014\u0017\u0017\u0005",
    "\u0002\u0007\u0007\u0015\u0016\u0018\u001b\u0004\u0002\u0005\u0005\f",
    "\f\u01b7\u0002V\u0003\u0002\u0002\u0002\u0004Z\u0003\u0002\u0002\u0002",
    "\u0006f\u0003\u0002\u0002\u0002\bh\u0003\u0002\u0002\u0002\nj\u0003",
    "\u0002\u0002\u0002\fm\u0003\u0002\u0002\u0002\u000ev\u0003\u0002\u0002",
    "\u0002\u0010x\u0003\u0002\u0002\u0002\u0012\u008a\u0003\u0002\u0002",
    "\u0002\u0014\u008d\u0003\u0002\u0002\u0002\u0016\u0098\u0003\u0002\u0002",
    "\u0002\u0018\u00a0\u0003\u0002\u0002\u0002\u001a\u00aa\u0003\u0002\u0002",
    "\u0002\u001c\u00b6\u0003\u0002\u0002\u0002\u001e\u00be\u0003\u0002\u0002",
    "\u0002 \u00c1\u0003\u0002\u0002\u0002\"\u00cb\u0003\u0002\u0002\u0002",
    "$\u00d4\u0003\u0002\u0002\u0002&\u00d6\u0003\u0002\u0002\u0002(\u00d9",
    "\u0003\u0002\u0002\u0002*\u00e8\u0003\u0002\u0002\u0002,\u00ea\u0003",
    "\u0002\u0002\u0002.\u00f2\u0003\u0002\u0002\u00020\u00f7\u0003\u0002",
    "\u0002\u00022\u0114\u0003\u0002\u0002\u00024\u0116\u0003\u0002\u0002",
    "\u00026\u0124\u0003\u0002\u0002\u00028\u0126\u0003\u0002\u0002\u0002",
    ":\u012e\u0003\u0002\u0002\u0002<\u0130\u0003\u0002\u0002\u0002>\u0160",
    "\u0003\u0002\u0002\u0002@\u0173\u0003\u0002\u0002\u0002B\u0177\u0003",
    "\u0002\u0002\u0002D\u017f\u0003\u0002\u0002\u0002F\u018b\u0003\u0002",
    "\u0002\u0002H\u018d\u0003\u0002\u0002\u0002J\u0193\u0003\u0002\u0002",
    "\u0002L\u0199\u0003\u0002\u0002\u0002N\u019b\u0003\u0002\u0002\u0002",
    "PR\u0005\u0004\u0003\u0002QP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002",
    "\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TW\u0003\u0002",
    "\u0002\u0002UW\u0005\u0006\u0004\u0002VQ\u0003\u0002\u0002\u0002VU\u0003",
    "\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0007\u0002\u0002\u0003",
    "Y\u0003\u0003\u0002\u0002\u0002Z[\u0005\u0006\u0004\u0002[]\u0005\n",
    "\u0006\u0002\\^\u0005\"\u0012\u0002]\\\u0003\u0002\u0002\u0002^_\u0003",
    "\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002",
    "`b\u0003\u0002\u0002\u0002ac\u0005,\u0017\u0002ba\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0005\b",
    "\u0005\u0002e\u0005\u0003\u0002\u0002\u0002fg\u0007\u0004\u0002\u0002",
    "g\u0007\u0003\u0002\u0002\u0002hi\u0007\u000f\u0002\u0002i\t\u0003\u0002",
    "\u0002\u0002jk\u0005\u0010\t\u0002kl\u0005\u000e\b\u0002l\u000b\u0003",
    "\u0002\u0002\u0002mt\u0007\u0005\u0002\u0002no\u0007\u001b\u0002\u0002",
    "or\u0007\u0005\u0002\u0002pq\u0007\u001b\u0002\u0002qs\u0007\u0005\u0002",
    "\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002su\u0003\u0002",
    "\u0002\u0002tn\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\r",
    "\u0003\u0002\u0002\u0002vw\u0007\u0007\u0002\u0002w\u000f\u0003\u0002",
    "\u0002\u0002x}\u0005\u0012\n\u0002yz\u0007\u0011\u0002\u0002z|\u0005",
    "\u0012\n\u0002{y\u0003\u0002\u0002\u0002|\u007f\u0003\u0002\u0002\u0002",
    "}{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0011\u0003\u0002",
    "\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u0080\u0084\u0005\u0014",
    "\u000b\u0002\u0081\u0083\u0005\u0016\f\u0002\u0082\u0081\u0003\u0002",
    "\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0087\u0003\u0002",
    "\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u0088\u0005\u0018",
    "\r\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089\u008b\u0005\u001a",
    "\u000e\u0002\u008a\u0080\u0003\u0002\u0002\u0002\u008a\u0089\u0003\u0002",
    "\u0002\u0002\u008b\u0013\u0003\u0002\u0002\u0002\u008c\u008e\u0005\u001e",
    "\u0010\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002",
    "\u0002\u0002\u008e\u0090\u0003\u0002\u0002\u0002\u008f\u0091\u0005\f",
    "\u0007\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002",
    "\u0002\u0002\u0091\u0093\u0003\u0002\u0002\u0002\u0092\u0094\u0005\u001c",
    "\u000f\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002",
    "\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0005 ",
    "\u0011\u0002\u0096\u0015\u0003\u0002\u0002\u0002\u0097\u0099\u0005\u001e",
    "\u0010\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002",
    "\u0002\u0002\u0099\u009b\u0003\u0002\u0002\u0002\u009a\u009c\u0005\f",
    "\u0007\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e\u0005 ",
    "\u0011\u0002\u009e\u0017\u0003\u0002\u0002\u0002\u009f\u00a1\u0005\u001e",
    "\u0010\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002",
    "\u0002\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2\u00a4\u0005\f",
    "\u0007\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002",
    "\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a7\u0005 ",
    "\u0011\u0002\u00a6\u00a8\u0005\u001c\u000f\u0002\u00a7\u00a6\u0003\u0002",
    "\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u0019\u0003\u0002",
    "\u0002\u0002\u00a9\u00ab\u0005\u001e\u0010\u0002\u00aa\u00a9\u0003\u0002",
    "\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ad\u0003\u0002",
    "\u0002\u0002\u00ac\u00ae\u0005\f\u0007\u0002\u00ad\u00ac\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003\u0002",
    "\u0002\u0002\u00af\u00b1\u0005\u001c\u000f\u0002\u00b0\u00af\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002",
    "\u0002\u0002\u00b2\u00b4\u0005 \u0011\u0002\u00b3\u00b5\u0005\u001c",
    "\u000f\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002",
    "\u0002\u0002\u00b5\u001b\u0003\u0002\u0002\u0002\u00b6\u00b8\u0007\u0012",
    "\u0002\u0002\u00b7\u00b9\u0005 \u0011\u0002\u00b8\u00b7\u0003\u0002",
    "\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002",
    "\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002",
    "\u0002\u0002\u00bc\u00bd\u0007\u0013\u0002\u0002\u00bd\u001d\u0003\u0002",
    "\u0002\u0002\u00be\u00bf\t\u0002\u0002\u0002\u00bf\u001f\u0003\u0002",
    "\u0002\u0002\u00c0\u00c2\t\u0003\u0002\u0002\u00c1\u00c0\u0003\u0002",
    "\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002",
    "\u0002\u0002\u00c3\u00c5\u0007\f\u0002\u0002\u00c4\u00c6\t\u0004\u0002",
    "\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002",
    "\u0002\u00c6\u00c8\u0003\u0002\u0002\u0002\u00c7\u00c9\u0007\u001d\u0002",
    "\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002",
    "\u0002\u00c9!\u0003\u0002\u0002\u0002\u00ca\u00cc\u0005F$\u0002\u00cb",
    "\u00ca\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc",
    "\u00d2\u0003\u0002\u0002\u0002\u00cd\u00d3\u0005.\u0018\u0002\u00ce",
    "\u00d0\u0005$\u0013\u0002\u00cf\u00d1\u0005(\u0015\u0002\u00d0\u00cf",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3",
    "\u0003\u0002\u0002\u0002\u00d2\u00cd\u0003\u0002\u0002\u0002\u00d2\u00ce",
    "\u0003\u0002\u0002\u0002\u00d3#\u0003\u0002\u0002\u0002\u00d4\u00d5",
    "\u0007\n\u0002\u0002\u00d5%\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007",
    "\u000b\u0002\u0002\u00d7\'\u0003\u0002\u0002\u0002\u00d8\u00da\u0005",
    "*\u0016\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003",
    "\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00db\u00dc\u0003",
    "\u0002\u0002\u0002\u00dc)\u0003\u0002\u0002\u0002\u00dd\u00df\t\u0003",
    "\u0002\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e2\t\u0005",
    "\u0002\u0002\u00e1\u00e3\t\u0004\u0002\u0002\u00e2\u00e1\u0003\u0002",
    "\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e5\u0003\u0002",
    "\u0002\u0002\u00e4\u00e6\u0007\u001d\u0002\u0002\u00e5\u00e4\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e9\u0003\u0002",
    "\u0002\u0002\u00e7\u00e9\t\u0002\u0002\u0002\u00e8\u00de\u0003\u0002",
    "\u0002\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e9+\u0003\u0002",
    "\u0002\u0002\u00ea\u00ee\u0007\u0003\u0002\u0002\u00eb\u00ed\u0005*",
    "\u0016\u0002\u00ec\u00eb\u0003\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002",
    "\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002",
    "\u0002\u0002\u00ef-\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002",
    "\u0002\u0002\u00f1\u00f3\u00050\u0019\u0002\u00f2\u00f1\u0003\u0002",
    "\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002",
    "\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5/\u0003\u0002",
    "\u0002\u0002\u00f6\u00f8\u0005&\u0014\u0002\u00f7\u00f6\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00fa\u0003\u0002",
    "\u0002\u0002\u00f9\u00fb\u0005$\u0013\u0002\u00fa\u00f9\u0003\u0002",
    "\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fd\u0003\u0002",
    "\u0002\u0002\u00fc\u00fe\u0005@!\u0002\u00fd\u00fc\u0003\u0002\u0002",
    "\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002",
    "\u0002\u00ff\u0104\u00052\u001a\u0002\u0100\u0101\u00056\u001c\u0002",
    "\u0101\u0102\u0005:\u001e\u0002\u0102\u0105\u0003\u0002\u0002\u0002",
    "\u0103\u0105\u00054\u001b\u0002\u0104\u0100\u0003\u0002\u0002\u0002",
    "\u0104\u0103\u0003\u0002\u0002\u0002\u0105\u0109\u0003\u0002\u0002\u0002",
    "\u0106\u0108\u0005> \u0002\u0107\u0106\u0003\u0002\u0002\u0002\u0108",
    "\u010b\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0003\u0002\u0002\u0002\u010a\u010f\u0003\u0002\u0002\u0002\u010b",
    "\u0109\u0003\u0002\u0002\u0002\u010c\u010e\u0005<\u001f\u0002\u010d",
    "\u010c\u0003\u0002\u0002\u0002\u010e\u0111\u0003\u0002\u0002\u0002\u010f",
    "\u010d\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110",
    "\u0112\u0003\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0112",
    "\u0113\u0007\u001b\u0002\u0002\u01131\u0003\u0002\u0002\u0002\u0114",
    "\u0115\u0007\f\u0002\u0002\u01153\u0003\u0002\u0002\u0002\u0116\u0122",
    "\u00056\u001c\u0002\u0117\u0123\u0005:\u001e\u0002\u0118\u011f\u0005",
    "8\u001d\u0002\u0119\u011a\u0007\u0019\u0002\u0002\u011a\u011b\u0005",
    "6\u001c\u0002\u011b\u011c\u00058\u001d\u0002\u011c\u011e\u0003\u0002",
    "\u0002\u0002\u011d\u0119\u0003\u0002\u0002\u0002\u011e\u0121\u0003\u0002",
    "\u0002\u0002\u011f\u011d\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002",
    "\u0002\u0002\u0120\u0123\u0003\u0002\u0002\u0002\u0121\u011f\u0003\u0002",
    "\u0002\u0002\u0122\u0117\u0003\u0002\u0002\u0002\u0122\u0118\u0003\u0002",
    "\u0002\u0002\u01235\u0003\u0002\u0002\u0002\u0124\u0125\u0007\f\u0002",
    "\u0002\u01257\u0003\u0002\u0002\u0002\u0126\u012b\u0005:\u001e\u0002",
    "\u0127\u0128\u0007\u001a\u0002\u0002\u0128\u012a\u0005:\u001e\u0002",
    "\u0129\u0127\u0003\u0002\u0002\u0002\u012a\u012d\u0003\u0002\u0002\u0002",
    "\u012b\u0129\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002",
    "\u012c9\u0003\u0002\u0002\u0002\u012d\u012b\u0003\u0002\u0002\u0002",
    "\u012e\u012f\u0007\f\u0002\u0002\u012f;\u0003\u0002\u0002\u0002\u0130",
    "\u0131\u0007!\u0002\u0002\u0131\u0136\u0007\f\u0002\u0002\u0132\u0133",
    "\u0007\u001b\u0002\u0002\u0133\u0135\u0007\f\u0002\u0002\u0134\u0132",
    "\u0003\u0002\u0002\u0002\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134",
    "\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0139",
    "\u0003\u0002\u0002\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0139\u013c",
    "\u0007\u0005\u0002\u0002\u013a\u013b\u0007\b\u0002\u0002\u013b\u013d",
    "\u0007\u0005\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013c\u013d",
    "\u0003\u0002\u0002\u0002\u013d\u013f\u0003\u0002\u0002\u0002\u013e\u0140",
    "\u0007\f\u0002\u0002\u013f\u013e\u0003\u0002\u0002\u0002\u013f\u0140",
    "\u0003\u0002\u0002\u0002\u0140\u015d\u0003\u0002\u0002\u0002\u0141\u0142",
    "\u0007\u0010\u0002\u0002\u0142\u0145\u0007\u0005\u0002\u0002\u0143\u0144",
    "\u0007\b\u0002\u0002\u0144\u0146\u0007\u0005\u0002\u0002\u0145\u0143",
    "\u0003\u0002\u0002\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0148",
    "\u0003\u0002\u0002\u0002\u0147\u0149\u0007\f\u0002\u0002\u0148\u0147",
    "\u0003\u0002\u0002\u0002\u0148\u0149\u0003\u0002\u0002\u0002\u0149\u0158",
    "\u0003\u0002\u0002\u0002\u014a\u014b\u0007\u001b\u0002\u0002\u014b\u014d",
    "\u0007\u0005\u0002\u0002\u014c\u014e\u0007\f\u0002\u0002\u014d\u014c",
    "\u0003\u0002\u0002\u0002\u014d\u014e\u0003\u0002\u0002\u0002\u014e\u0154",
    "\u0003\u0002\u0002\u0002\u014f\u0150\u0007\b\u0002\u0002\u0150\u0152",
    "\u0007\u0005\u0002\u0002\u0151\u0153\u0007\f\u0002\u0002\u0152\u0151",
    "\u0003\u0002\u0002\u0002\u0152\u0153\u0003\u0002\u0002\u0002\u0153\u0155",
    "\u0003\u0002\u0002\u0002\u0154\u014f\u0003\u0002\u0002\u0002\u0154\u0155",
    "\u0003\u0002\u0002\u0002\u0155\u0157\u0003\u0002\u0002\u0002\u0156\u014a",
    "\u0003\u0002\u0002\u0002\u0157\u015a\u0003\u0002\u0002\u0002\u0158\u0156",
    "\u0003\u0002\u0002\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159\u015c",
    "\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002\u0002\u0002\u015b\u0141",
    "\u0003\u0002\u0002\u0002\u015c\u015f\u0003\u0002\u0002\u0002\u015d\u015b",
    "\u0003\u0002\u0002\u0002\u015d\u015e\u0003\u0002\u0002\u0002\u015e=",
    "\u0003\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u0160\u0161",
    "\u0007\"\u0002\u0002\u0161\u0163\u0007\u0005\u0002\u0002\u0162\u0164",
    "\u0007\f\u0002\u0002\u0163\u0162\u0003\u0002\u0002\u0002\u0163\u0164",
    "\u0003\u0002\u0002\u0002\u0164\u016a\u0003\u0002\u0002\u0002\u0165\u0166",
    "\u0007\b\u0002\u0002\u0166\u0168\u0007\u0005\u0002\u0002\u0167\u0169",
    "\u0007\f\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002\u0168\u0169",
    "\u0003\u0002\u0002\u0002\u0169\u016b\u0003\u0002\u0002\u0002\u016a\u0165",
    "\u0003\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016f",
    "\u0003\u0002\u0002\u0002\u016c\u016e\u0007\f\u0002\u0002\u016d\u016c",
    "\u0003\u0002\u0002\u0002\u016e\u0171\u0003\u0002\u0002\u0002\u016f\u016d",
    "\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002\u0002\u0170?",
    "\u0003\u0002\u0002\u0002\u0171\u016f\u0003\u0002\u0002\u0002\u0172\u0174",
    "\u0005B\"\u0002\u0173\u0172\u0003\u0002\u0002\u0002\u0174\u0175\u0003",
    "\u0002\u0002\u0002\u0175\u0173\u0003\u0002\u0002\u0002\u0175\u0176\u0003",
    "\u0002\u0002\u0002\u0176A\u0003\u0002\u0002\u0002\u0177\u0179\u0005",
    "D#\u0002\u0178\u017a\u0005F$\u0002\u0179\u0178\u0003\u0002\u0002\u0002",
    "\u017a\u017b\u0003\u0002\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002",
    "\u017b\u017c\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002",
    "\u017d\u017e\u0005N(\u0002\u017eC\u0003\u0002\u0002\u0002\u017f\u0180",
    "\u0007\u0014\u0002\u0002\u0180E\u0003\u0002\u0002\u0002\u0181\u0183",
    "\u0005L\'\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0182\u0183\u0003",
    "\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0185\u0007",
    "\u001f\u0002\u0002\u0185\u018c\u0005H%\u0002\u0186\u0188\u0005L\'\u0002",
    "\u0187\u0186\u0003\u0002\u0002\u0002\u0187\u0188\u0003\u0002\u0002\u0002",
    "\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u018a\u0007 \u0002\u0002",
    "\u018a\u018c\u0005J&\u0002\u018b\u0182\u0003\u0002\u0002\u0002\u018b",
    "\u0187\u0003\u0002\u0002\u0002\u018cG\u0003\u0002\u0002\u0002\u018d",
    "\u018e\u0007\u0005\u0002\u0002\u018e\u018f\u0007\u0010\u0002\u0002\u018f",
    "\u0191\u0007\u0005\u0002\u0002\u0190\u0192\u0007\f\u0002\u0002\u0191",
    "\u0190\u0003\u0002\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192",
    "I\u0003\u0002\u0002\u0002\u0193\u0194\u0007\u0005\u0002\u0002\u0194",
    "\u0195\u0007\u0010\u0002\u0002\u0195\u0197\u0007\u0005\u0002\u0002\u0196",
    "\u0198\u0007\f\u0002\u0002\u0197\u0196\u0003\u0002\u0002\u0002\u0197",
    "\u0198\u0003\u0002\u0002\u0002\u0198K\u0003\u0002\u0002\u0002\u0199",
    "\u019a\u0007\u0016\u0002\u0002\u019aM\u0003\u0002\u0002\u0002\u019b",
    "\u019c\u0007\u0015\u0002\u0002\u019cO\u0003\u0002\u0002\u0002CSV_br",
    "t}\u0084\u008a\u008d\u0090\u0093\u0098\u009b\u00a0\u00a3\u00a7\u00aa",
    "\u00ad\u00b0\u00b4\u00ba\u00c1\u00c5\u00c8\u00cb\u00d0\u00d2\u00db\u00de",
    "\u00e2\u00e5\u00e8\u00ee\u00f4\u00f7\u00fa\u00fd\u0104\u0109\u010f\u011f",
    "\u0122\u012b\u0136\u013c\u013f\u0145\u0148\u014d\u0152\u0154\u0158\u015d",
    "\u0163\u0168\u016a\u016f\u0175\u017b\u0182\u0187\u018b\u0191\u0197"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'//'", "'*'", null, null, "':'", "'-'", "'='", 
                     null, "'#ontology'", null, null, null, null, "'_'", 
                     "'~'", "'['", "']'", "'{'", "'}'", "'!'", null, null, 
                     "';'", "','", "'.'", null, null, "'@'", "'@vl:'", "'@vi:'", 
                     null, "'@cfr:'" ];

var symbolicNames = [ null, "REM_BEG", "HEAD_LINE", "NUM", "SEP", "COLON", 
                      "DASH", "EQ", "HASHTAG", "GENERAL", "WORD", "LAT_WORD", 
                      "GRC_WORD", "NEWLINE", "UNDERSCORE", "TILDE", "L_BRAC", 
                      "R_BRAC", "L_CURL", "R_CURL", "NOT", "PRE_PUNCT", 
                      "PUNCT", "SEMICOLON", "COMMA", "DOT", "WS", "EXT_PUNCT", 
                      "AT", "VLTYPE", "VITYPE", "BIBL", "CFR", "ANY" ];

var ruleNames =  [ "start", "note", "headLine", "eol", "ref", "numRef", 
                   "colon", "wordRefRanges", "wordRefRange", "firstWordRef", 
                   "midWordRef", "lastWordRef", "singleWordRef", "anchor", 
                   "sep", "wordRef", "item", "type", "general", "freeText", 
                   "token", "rem", "extTriples", "extTriple", "subject", 
                   "predicateObjectList", "predicate", "objectList", "object", 
                   "biblRef", "cfrRef", "conds", "cond", "openCond", "varId", 
                   "vlId", "viId", "not", "closeCond" ];

function HippolytusParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

HippolytusParser.prototype = Object.create(antlr4.Parser.prototype);
HippolytusParser.prototype.constructor = HippolytusParser;

Object.defineProperty(HippolytusParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

HippolytusParser.EOF = antlr4.Token.EOF;
HippolytusParser.REM_BEG = 1;
HippolytusParser.HEAD_LINE = 2;
HippolytusParser.NUM = 3;
HippolytusParser.SEP = 4;
HippolytusParser.COLON = 5;
HippolytusParser.DASH = 6;
HippolytusParser.EQ = 7;
HippolytusParser.HASHTAG = 8;
HippolytusParser.GENERAL = 9;
HippolytusParser.WORD = 10;
HippolytusParser.LAT_WORD = 11;
HippolytusParser.GRC_WORD = 12;
HippolytusParser.NEWLINE = 13;
HippolytusParser.UNDERSCORE = 14;
HippolytusParser.TILDE = 15;
HippolytusParser.L_BRAC = 16;
HippolytusParser.R_BRAC = 17;
HippolytusParser.L_CURL = 18;
HippolytusParser.R_CURL = 19;
HippolytusParser.NOT = 20;
HippolytusParser.PRE_PUNCT = 21;
HippolytusParser.PUNCT = 22;
HippolytusParser.SEMICOLON = 23;
HippolytusParser.COMMA = 24;
HippolytusParser.DOT = 25;
HippolytusParser.WS = 26;
HippolytusParser.EXT_PUNCT = 27;
HippolytusParser.AT = 28;
HippolytusParser.VLTYPE = 29;
HippolytusParser.VITYPE = 30;
HippolytusParser.BIBL = 31;
HippolytusParser.CFR = 32;
HippolytusParser.ANY = 33;

HippolytusParser.RULE_start = 0;
HippolytusParser.RULE_note = 1;
HippolytusParser.RULE_headLine = 2;
HippolytusParser.RULE_eol = 3;
HippolytusParser.RULE_ref = 4;
HippolytusParser.RULE_numRef = 5;
HippolytusParser.RULE_colon = 6;
HippolytusParser.RULE_wordRefRanges = 7;
HippolytusParser.RULE_wordRefRange = 8;
HippolytusParser.RULE_firstWordRef = 9;
HippolytusParser.RULE_midWordRef = 10;
HippolytusParser.RULE_lastWordRef = 11;
HippolytusParser.RULE_singleWordRef = 12;
HippolytusParser.RULE_anchor = 13;
HippolytusParser.RULE_sep = 14;
HippolytusParser.RULE_wordRef = 15;
HippolytusParser.RULE_item = 16;
HippolytusParser.RULE_type = 17;
HippolytusParser.RULE_general = 18;
HippolytusParser.RULE_freeText = 19;
HippolytusParser.RULE_token = 20;
HippolytusParser.RULE_rem = 21;
HippolytusParser.RULE_extTriples = 22;
HippolytusParser.RULE_extTriple = 23;
HippolytusParser.RULE_subject = 24;
HippolytusParser.RULE_predicateObjectList = 25;
HippolytusParser.RULE_predicate = 26;
HippolytusParser.RULE_objectList = 27;
HippolytusParser.RULE_object = 28;
HippolytusParser.RULE_biblRef = 29;
HippolytusParser.RULE_cfrRef = 30;
HippolytusParser.RULE_conds = 31;
HippolytusParser.RULE_cond = 32;
HippolytusParser.RULE_openCond = 33;
HippolytusParser.RULE_varId = 34;
HippolytusParser.RULE_vlId = 35;
HippolytusParser.RULE_viId = 36;
HippolytusParser.RULE_not = 37;
HippolytusParser.RULE_closeCond = 38;

function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.EOF = function() {
    return this.getToken(HippolytusParser.EOF, 0);
};

StartContext.prototype.headLine = function() {
    return this.getTypedRuleContext(HeadLineContext,0);
};

StartContext.prototype.note = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NoteContext);
    } else {
        return this.getTypedRuleContext(NoteContext,i);
    }
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitStart(this);
	}
};




HippolytusParser.StartContext = StartContext;

HippolytusParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, HippolytusParser.RULE_start);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 79; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 78;
                this.note();
                this.state = 81; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===HippolytusParser.HEAD_LINE);
            break;

        case 2:
            this.state = 83;
            this.headLine();
            break;

        }
        this.state = 86;
        this.match(HippolytusParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_note;
    return this;
}

NoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoteContext.prototype.constructor = NoteContext;

NoteContext.prototype.headLine = function() {
    return this.getTypedRuleContext(HeadLineContext,0);
};

NoteContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

NoteContext.prototype.eol = function() {
    return this.getTypedRuleContext(EolContext,0);
};

NoteContext.prototype.item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ItemContext);
    } else {
        return this.getTypedRuleContext(ItemContext,i);
    }
};

NoteContext.prototype.rem = function() {
    return this.getTypedRuleContext(RemContext,0);
};

NoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterNote(this);
	}
};

NoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitNote(this);
	}
};




HippolytusParser.NoteContext = NoteContext;

HippolytusParser.prototype.note = function() {

    var localctx = new NoteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, HippolytusParser.RULE_note);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.headLine();
        this.state = 89;
        this.ref();
        this.state = 91; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 90;
            this.item();
            this.state = 93; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HippolytusParser.HASHTAG) | (1 << HippolytusParser.GENERAL) | (1 << HippolytusParser.WORD) | (1 << HippolytusParser.L_CURL) | (1 << HippolytusParser.NOT) | (1 << HippolytusParser.VLTYPE) | (1 << HippolytusParser.VITYPE))) !== 0));
        this.state = 96;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.REM_BEG) {
            this.state = 95;
            this.rem();
        }

        this.state = 98;
        this.eol();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeadLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_headLine;
    return this;
}

HeadLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadLineContext.prototype.constructor = HeadLineContext;

HeadLineContext.prototype.HEAD_LINE = function() {
    return this.getToken(HippolytusParser.HEAD_LINE, 0);
};

HeadLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterHeadLine(this);
	}
};

HeadLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitHeadLine(this);
	}
};




HippolytusParser.HeadLineContext = HeadLineContext;

HippolytusParser.prototype.headLine = function() {

    var localctx = new HeadLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, HippolytusParser.RULE_headLine);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(HippolytusParser.HEAD_LINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_eol;
    return this;
}

EolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EolContext.prototype.constructor = EolContext;

EolContext.prototype.NEWLINE = function() {
    return this.getToken(HippolytusParser.NEWLINE, 0);
};

EolContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterEol(this);
	}
};

EolContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitEol(this);
	}
};




HippolytusParser.EolContext = EolContext;

HippolytusParser.prototype.eol = function() {

    var localctx = new EolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, HippolytusParser.RULE_eol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(HippolytusParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.wordRefRanges = function() {
    return this.getTypedRuleContext(WordRefRangesContext,0);
};

RefContext.prototype.colon = function() {
    return this.getTypedRuleContext(ColonContext,0);
};

RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitRef(this);
	}
};




HippolytusParser.RefContext = RefContext;

HippolytusParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, HippolytusParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.wordRefRanges();
        this.state = 105;
        this.colon();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_numRef;
    return this;
}

NumRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumRefContext.prototype.constructor = NumRefContext;

NumRefContext.prototype.NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.NUM);
    } else {
        return this.getToken(HippolytusParser.NUM, i);
    }
};


NumRefContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.DOT);
    } else {
        return this.getToken(HippolytusParser.DOT, i);
    }
};


NumRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterNumRef(this);
	}
};

NumRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitNumRef(this);
	}
};




HippolytusParser.NumRefContext = NumRefContext;

HippolytusParser.prototype.numRef = function() {

    var localctx = new NumRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, HippolytusParser.RULE_numRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(HippolytusParser.NUM);
        this.state = 114;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.DOT) {
            this.state = 108;
            this.match(HippolytusParser.DOT);
            this.state = 109;
            this.match(HippolytusParser.NUM);
            this.state = 112;
            _la = this._input.LA(1);
            if(_la===HippolytusParser.DOT) {
                this.state = 110;
                this.match(HippolytusParser.DOT);
                this.state = 111;
                this.match(HippolytusParser.NUM);
            }

        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_colon;
    return this;
}

ColonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColonContext.prototype.constructor = ColonContext;

ColonContext.prototype.COLON = function() {
    return this.getToken(HippolytusParser.COLON, 0);
};

ColonContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterColon(this);
	}
};

ColonContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitColon(this);
	}
};




HippolytusParser.ColonContext = ColonContext;

HippolytusParser.prototype.colon = function() {

    var localctx = new ColonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, HippolytusParser.RULE_colon);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(HippolytusParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WordRefRangesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_wordRefRanges;
    return this;
}

WordRefRangesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WordRefRangesContext.prototype.constructor = WordRefRangesContext;

WordRefRangesContext.prototype.wordRefRange = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WordRefRangeContext);
    } else {
        return this.getTypedRuleContext(WordRefRangeContext,i);
    }
};

WordRefRangesContext.prototype.TILDE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.TILDE);
    } else {
        return this.getToken(HippolytusParser.TILDE, i);
    }
};


WordRefRangesContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterWordRefRanges(this);
	}
};

WordRefRangesContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitWordRefRanges(this);
	}
};




HippolytusParser.WordRefRangesContext = WordRefRangesContext;

HippolytusParser.prototype.wordRefRanges = function() {

    var localctx = new WordRefRangesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, HippolytusParser.RULE_wordRefRanges);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.wordRefRange();
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HippolytusParser.TILDE) {
            this.state = 119;
            this.match(HippolytusParser.TILDE);
            this.state = 120;
            this.wordRefRange();
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WordRefRangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_wordRefRange;
    return this;
}

WordRefRangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WordRefRangeContext.prototype.constructor = WordRefRangeContext;

WordRefRangeContext.prototype.firstWordRef = function() {
    return this.getTypedRuleContext(FirstWordRefContext,0);
};

WordRefRangeContext.prototype.lastWordRef = function() {
    return this.getTypedRuleContext(LastWordRefContext,0);
};

WordRefRangeContext.prototype.midWordRef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MidWordRefContext);
    } else {
        return this.getTypedRuleContext(MidWordRefContext,i);
    }
};

WordRefRangeContext.prototype.singleWordRef = function() {
    return this.getTypedRuleContext(SingleWordRefContext,0);
};

WordRefRangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterWordRefRange(this);
	}
};

WordRefRangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitWordRefRange(this);
	}
};




HippolytusParser.WordRefRangeContext = WordRefRangeContext;

HippolytusParser.prototype.wordRefRange = function() {

    var localctx = new WordRefRangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, HippolytusParser.RULE_wordRefRange);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 126;
            this.firstWordRef();
            this.state = 130;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 127;
                    this.midWordRef(); 
                }
                this.state = 132;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
            }

            this.state = 133;
            this.lastWordRef();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 135;
            this.singleWordRef();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FirstWordRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_firstWordRef;
    return this;
}

FirstWordRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FirstWordRefContext.prototype.constructor = FirstWordRefContext;

FirstWordRefContext.prototype.wordRef = function() {
    return this.getTypedRuleContext(WordRefContext,0);
};

FirstWordRefContext.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};

FirstWordRefContext.prototype.numRef = function() {
    return this.getTypedRuleContext(NumRefContext,0);
};

FirstWordRefContext.prototype.anchor = function() {
    return this.getTypedRuleContext(AnchorContext,0);
};

FirstWordRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterFirstWordRef(this);
	}
};

FirstWordRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitFirstWordRef(this);
	}
};




HippolytusParser.FirstWordRefContext = FirstWordRefContext;

HippolytusParser.prototype.firstWordRef = function() {

    var localctx = new FirstWordRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, HippolytusParser.RULE_firstWordRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.SEP || _la===HippolytusParser.COLON) {
            this.state = 138;
            this.sep();
        }

        this.state = 142;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.NUM) {
            this.state = 141;
            this.numRef();
        }

        this.state = 145;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.L_BRAC) {
            this.state = 144;
            this.anchor();
        }

        this.state = 147;
        this.wordRef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MidWordRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_midWordRef;
    return this;
}

MidWordRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MidWordRefContext.prototype.constructor = MidWordRefContext;

MidWordRefContext.prototype.wordRef = function() {
    return this.getTypedRuleContext(WordRefContext,0);
};

MidWordRefContext.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};

MidWordRefContext.prototype.numRef = function() {
    return this.getTypedRuleContext(NumRefContext,0);
};

MidWordRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterMidWordRef(this);
	}
};

MidWordRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitMidWordRef(this);
	}
};




HippolytusParser.MidWordRefContext = MidWordRefContext;

HippolytusParser.prototype.midWordRef = function() {

    var localctx = new MidWordRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, HippolytusParser.RULE_midWordRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.SEP || _la===HippolytusParser.COLON) {
            this.state = 149;
            this.sep();
        }

        this.state = 153;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.NUM) {
            this.state = 152;
            this.numRef();
        }

        this.state = 155;
        this.wordRef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LastWordRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_lastWordRef;
    return this;
}

LastWordRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LastWordRefContext.prototype.constructor = LastWordRefContext;

LastWordRefContext.prototype.wordRef = function() {
    return this.getTypedRuleContext(WordRefContext,0);
};

LastWordRefContext.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};

LastWordRefContext.prototype.numRef = function() {
    return this.getTypedRuleContext(NumRefContext,0);
};

LastWordRefContext.prototype.anchor = function() {
    return this.getTypedRuleContext(AnchorContext,0);
};

LastWordRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterLastWordRef(this);
	}
};

LastWordRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitLastWordRef(this);
	}
};




HippolytusParser.LastWordRefContext = LastWordRefContext;

HippolytusParser.prototype.lastWordRef = function() {

    var localctx = new LastWordRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, HippolytusParser.RULE_lastWordRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.SEP || _la===HippolytusParser.COLON) {
            this.state = 157;
            this.sep();
        }

        this.state = 161;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.NUM) {
            this.state = 160;
            this.numRef();
        }

        this.state = 163;
        this.wordRef();
        this.state = 165;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.L_BRAC) {
            this.state = 164;
            this.anchor();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleWordRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_singleWordRef;
    return this;
}

SingleWordRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleWordRefContext.prototype.constructor = SingleWordRefContext;

SingleWordRefContext.prototype.wordRef = function() {
    return this.getTypedRuleContext(WordRefContext,0);
};

SingleWordRefContext.prototype.sep = function() {
    return this.getTypedRuleContext(SepContext,0);
};

SingleWordRefContext.prototype.numRef = function() {
    return this.getTypedRuleContext(NumRefContext,0);
};

SingleWordRefContext.prototype.anchor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnchorContext);
    } else {
        return this.getTypedRuleContext(AnchorContext,i);
    }
};

SingleWordRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterSingleWordRef(this);
	}
};

SingleWordRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitSingleWordRef(this);
	}
};




HippolytusParser.SingleWordRefContext = SingleWordRefContext;

HippolytusParser.prototype.singleWordRef = function() {

    var localctx = new SingleWordRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, HippolytusParser.RULE_singleWordRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.SEP || _la===HippolytusParser.COLON) {
            this.state = 167;
            this.sep();
        }

        this.state = 171;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.NUM) {
            this.state = 170;
            this.numRef();
        }

        this.state = 174;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.L_BRAC) {
            this.state = 173;
            this.anchor();
        }

        this.state = 176;
        this.wordRef();
        this.state = 178;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.L_BRAC) {
            this.state = 177;
            this.anchor();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnchorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_anchor;
    return this;
}

AnchorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnchorContext.prototype.constructor = AnchorContext;

AnchorContext.prototype.L_BRAC = function() {
    return this.getToken(HippolytusParser.L_BRAC, 0);
};

AnchorContext.prototype.R_BRAC = function() {
    return this.getToken(HippolytusParser.R_BRAC, 0);
};

AnchorContext.prototype.wordRef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WordRefContext);
    } else {
        return this.getTypedRuleContext(WordRefContext,i);
    }
};

AnchorContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterAnchor(this);
	}
};

AnchorContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitAnchor(this);
	}
};




HippolytusParser.AnchorContext = AnchorContext;

HippolytusParser.prototype.anchor = function() {

    var localctx = new AnchorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, HippolytusParser.RULE_anchor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(HippolytusParser.L_BRAC);
        this.state = 182; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 181;
            this.wordRef();
            this.state = 184; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HippolytusParser.WORD) | (1 << HippolytusParser.L_CURL) | (1 << HippolytusParser.PRE_PUNCT))) !== 0));
        this.state = 186;
        this.match(HippolytusParser.R_BRAC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_sep;
    return this;
}

SepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SepContext.prototype.constructor = SepContext;

SepContext.prototype.SEP = function() {
    return this.getToken(HippolytusParser.SEP, 0);
};

SepContext.prototype.COLON = function() {
    return this.getToken(HippolytusParser.COLON, 0);
};

SepContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterSep(this);
	}
};

SepContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitSep(this);
	}
};




HippolytusParser.SepContext = SepContext;

HippolytusParser.prototype.sep = function() {

    var localctx = new SepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, HippolytusParser.RULE_sep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        _la = this._input.LA(1);
        if(!(_la===HippolytusParser.SEP || _la===HippolytusParser.COLON)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WordRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_wordRef;
    return this;
}

WordRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WordRefContext.prototype.constructor = WordRefContext;

WordRefContext.prototype.WORD = function() {
    return this.getToken(HippolytusParser.WORD, 0);
};

WordRefContext.prototype.EXT_PUNCT = function() {
    return this.getToken(HippolytusParser.EXT_PUNCT, 0);
};

WordRefContext.prototype.PRE_PUNCT = function() {
    return this.getToken(HippolytusParser.PRE_PUNCT, 0);
};

WordRefContext.prototype.L_CURL = function() {
    return this.getToken(HippolytusParser.L_CURL, 0);
};

WordRefContext.prototype.PUNCT = function() {
    return this.getToken(HippolytusParser.PUNCT, 0);
};

WordRefContext.prototype.R_CURL = function() {
    return this.getToken(HippolytusParser.R_CURL, 0);
};

WordRefContext.prototype.NOT = function() {
    return this.getToken(HippolytusParser.NOT, 0);
};

WordRefContext.prototype.DOT = function() {
    return this.getToken(HippolytusParser.DOT, 0);
};

WordRefContext.prototype.SEMICOLON = function() {
    return this.getToken(HippolytusParser.SEMICOLON, 0);
};

WordRefContext.prototype.COMMA = function() {
    return this.getToken(HippolytusParser.COMMA, 0);
};

WordRefContext.prototype.COLON = function() {
    return this.getToken(HippolytusParser.COLON, 0);
};

WordRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterWordRef(this);
	}
};

WordRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitWordRef(this);
	}
};




HippolytusParser.WordRefContext = WordRefContext;

HippolytusParser.prototype.wordRef = function() {

    var localctx = new WordRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, HippolytusParser.RULE_wordRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.L_CURL || _la===HippolytusParser.PRE_PUNCT) {
            this.state = 190;
            _la = this._input.LA(1);
            if(!(_la===HippolytusParser.L_CURL || _la===HippolytusParser.PRE_PUNCT)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

        this.state = 193;
        this.match(HippolytusParser.WORD);
        this.state = 195;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        if(la_===1) {
            this.state = 194;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HippolytusParser.COLON) | (1 << HippolytusParser.R_CURL) | (1 << HippolytusParser.NOT) | (1 << HippolytusParser.PUNCT) | (1 << HippolytusParser.SEMICOLON) | (1 << HippolytusParser.COMMA) | (1 << HippolytusParser.DOT))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }

        }
        this.state = 198;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.EXT_PUNCT) {
            this.state = 197;
            this.match(HippolytusParser.EXT_PUNCT);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_item;
    return this;
}

ItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ItemContext.prototype.constructor = ItemContext;

ItemContext.prototype.extTriples = function() {
    return this.getTypedRuleContext(ExtTriplesContext,0);
};

ItemContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ItemContext.prototype.varId = function() {
    return this.getTypedRuleContext(VarIdContext,0);
};

ItemContext.prototype.freeText = function() {
    return this.getTypedRuleContext(FreeTextContext,0);
};

ItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterItem(this);
	}
};

ItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitItem(this);
	}
};




HippolytusParser.ItemContext = ItemContext;

HippolytusParser.prototype.item = function() {

    var localctx = new ItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, HippolytusParser.RULE_item);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HippolytusParser.NOT) | (1 << HippolytusParser.VLTYPE) | (1 << HippolytusParser.VITYPE))) !== 0)) {
            this.state = 200;
            this.varId();
        }

        this.state = 208;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.state = 203;
            this.extTriples();
            break;

        case 2:
            this.state = 204;
            this.type();
            this.state = 206;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
            if(la_===1) {
                this.state = 205;
                this.freeText();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.HASHTAG = function() {
    return this.getToken(HippolytusParser.HASHTAG, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitType(this);
	}
};




HippolytusParser.TypeContext = TypeContext;

HippolytusParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, HippolytusParser.RULE_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(HippolytusParser.HASHTAG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GeneralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_general;
    return this;
}

GeneralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GeneralContext.prototype.constructor = GeneralContext;

GeneralContext.prototype.GENERAL = function() {
    return this.getToken(HippolytusParser.GENERAL, 0);
};

GeneralContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterGeneral(this);
	}
};

GeneralContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitGeneral(this);
	}
};




HippolytusParser.GeneralContext = GeneralContext;

HippolytusParser.prototype.general = function() {

    var localctx = new GeneralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, HippolytusParser.RULE_general);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(HippolytusParser.GENERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FreeTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_freeText;
    return this;
}

FreeTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FreeTextContext.prototype.constructor = FreeTextContext;

FreeTextContext.prototype.token = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TokenContext);
    } else {
        return this.getTypedRuleContext(TokenContext,i);
    }
};

FreeTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterFreeText(this);
	}
};

FreeTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitFreeText(this);
	}
};




HippolytusParser.FreeTextContext = FreeTextContext;

HippolytusParser.prototype.freeText = function() {

    var localctx = new FreeTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, HippolytusParser.RULE_freeText);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 214;
        		this.token();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 217; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_token;
    return this;
}

TokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TokenContext.prototype.constructor = TokenContext;

TokenContext.prototype.SEP = function() {
    return this.getToken(HippolytusParser.SEP, 0);
};

TokenContext.prototype.COLON = function() {
    return this.getToken(HippolytusParser.COLON, 0);
};

TokenContext.prototype.WORD = function() {
    return this.getToken(HippolytusParser.WORD, 0);
};

TokenContext.prototype.NUM = function() {
    return this.getToken(HippolytusParser.NUM, 0);
};

TokenContext.prototype.EXT_PUNCT = function() {
    return this.getToken(HippolytusParser.EXT_PUNCT, 0);
};

TokenContext.prototype.PRE_PUNCT = function() {
    return this.getToken(HippolytusParser.PRE_PUNCT, 0);
};

TokenContext.prototype.L_CURL = function() {
    return this.getToken(HippolytusParser.L_CURL, 0);
};

TokenContext.prototype.PUNCT = function() {
    return this.getToken(HippolytusParser.PUNCT, 0);
};

TokenContext.prototype.R_CURL = function() {
    return this.getToken(HippolytusParser.R_CURL, 0);
};

TokenContext.prototype.NOT = function() {
    return this.getToken(HippolytusParser.NOT, 0);
};

TokenContext.prototype.DOT = function() {
    return this.getToken(HippolytusParser.DOT, 0);
};

TokenContext.prototype.SEMICOLON = function() {
    return this.getToken(HippolytusParser.SEMICOLON, 0);
};

TokenContext.prototype.COMMA = function() {
    return this.getToken(HippolytusParser.COMMA, 0);
};

TokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterToken(this);
	}
};

TokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitToken(this);
	}
};




HippolytusParser.TokenContext = TokenContext;

HippolytusParser.prototype.token = function() {

    var localctx = new TokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, HippolytusParser.RULE_token);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        switch(this._input.LA(1)) {
        case HippolytusParser.NUM:
        case HippolytusParser.WORD:
        case HippolytusParser.L_CURL:
        case HippolytusParser.PRE_PUNCT:
            this.state = 220;
            _la = this._input.LA(1);
            if(_la===HippolytusParser.L_CURL || _la===HippolytusParser.PRE_PUNCT) {
                this.state = 219;
                _la = this._input.LA(1);
                if(!(_la===HippolytusParser.L_CURL || _la===HippolytusParser.PRE_PUNCT)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 222;
            _la = this._input.LA(1);
            if(!(_la===HippolytusParser.NUM || _la===HippolytusParser.WORD)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 224;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
            if(la_===1) {
                this.state = 223;
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HippolytusParser.COLON) | (1 << HippolytusParser.R_CURL) | (1 << HippolytusParser.NOT) | (1 << HippolytusParser.PUNCT) | (1 << HippolytusParser.SEMICOLON) | (1 << HippolytusParser.COMMA) | (1 << HippolytusParser.DOT))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }

            }
            this.state = 227;
            _la = this._input.LA(1);
            if(_la===HippolytusParser.EXT_PUNCT) {
                this.state = 226;
                this.match(HippolytusParser.EXT_PUNCT);
            }

            break;
        case HippolytusParser.SEP:
        case HippolytusParser.COLON:
            this.state = 229;
            _la = this._input.LA(1);
            if(!(_la===HippolytusParser.SEP || _la===HippolytusParser.COLON)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_rem;
    return this;
}

RemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RemContext.prototype.constructor = RemContext;

RemContext.prototype.REM_BEG = function() {
    return this.getToken(HippolytusParser.REM_BEG, 0);
};

RemContext.prototype.token = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TokenContext);
    } else {
        return this.getTypedRuleContext(TokenContext,i);
    }
};

RemContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterRem(this);
	}
};

RemContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitRem(this);
	}
};




HippolytusParser.RemContext = RemContext;

HippolytusParser.prototype.rem = function() {

    var localctx = new RemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, HippolytusParser.RULE_rem);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(HippolytusParser.REM_BEG);
        this.state = 236;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HippolytusParser.NUM) | (1 << HippolytusParser.SEP) | (1 << HippolytusParser.COLON) | (1 << HippolytusParser.WORD) | (1 << HippolytusParser.L_CURL) | (1 << HippolytusParser.PRE_PUNCT))) !== 0)) {
            this.state = 233;
            this.token();
            this.state = 238;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtTriplesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_extTriples;
    return this;
}

ExtTriplesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtTriplesContext.prototype.constructor = ExtTriplesContext;

ExtTriplesContext.prototype.extTriple = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExtTripleContext);
    } else {
        return this.getTypedRuleContext(ExtTripleContext,i);
    }
};

ExtTriplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterExtTriples(this);
	}
};

ExtTriplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitExtTriples(this);
	}
};




HippolytusParser.ExtTriplesContext = ExtTriplesContext;

HippolytusParser.prototype.extTriples = function() {

    var localctx = new ExtTriplesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, HippolytusParser.RULE_extTriples);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 239;
        		this.extTriple();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 242; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,34, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtTripleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_extTriple;
    return this;
}

ExtTripleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtTripleContext.prototype.constructor = ExtTripleContext;

ExtTripleContext.prototype.subject = function() {
    return this.getTypedRuleContext(SubjectContext,0);
};

ExtTripleContext.prototype.DOT = function() {
    return this.getToken(HippolytusParser.DOT, 0);
};

ExtTripleContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

ExtTripleContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

ExtTripleContext.prototype.predicateObjectList = function() {
    return this.getTypedRuleContext(PredicateObjectListContext,0);
};

ExtTripleContext.prototype.general = function() {
    return this.getTypedRuleContext(GeneralContext,0);
};

ExtTripleContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ExtTripleContext.prototype.conds = function() {
    return this.getTypedRuleContext(CondsContext,0);
};

ExtTripleContext.prototype.cfrRef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CfrRefContext);
    } else {
        return this.getTypedRuleContext(CfrRefContext,i);
    }
};

ExtTripleContext.prototype.biblRef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BiblRefContext);
    } else {
        return this.getTypedRuleContext(BiblRefContext,i);
    }
};

ExtTripleContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterExtTriple(this);
	}
};

ExtTripleContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitExtTriple(this);
	}
};




HippolytusParser.ExtTripleContext = ExtTripleContext;

HippolytusParser.prototype.extTriple = function() {

    var localctx = new ExtTripleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, HippolytusParser.RULE_extTriple);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.GENERAL) {
            this.state = 244;
            this.general();
        }

        this.state = 248;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.HASHTAG) {
            this.state = 247;
            this.type();
        }

        this.state = 251;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.L_CURL) {
            this.state = 250;
            this.conds();
        }

        this.state = 253;
        this.subject();
        this.state = 258;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.state = 254;
            this.predicate();
            this.state = 255;
            this.object();
            break;

        case 2:
            this.state = 257;
            this.predicateObjectList();
            break;

        }
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HippolytusParser.CFR) {
            this.state = 260;
            this.cfrRef();
            this.state = 265;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HippolytusParser.BIBL) {
            this.state = 266;
            this.biblRef();
            this.state = 271;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 272;
        this.match(HippolytusParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_subject;
    return this;
}

SubjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubjectContext.prototype.constructor = SubjectContext;

SubjectContext.prototype.WORD = function() {
    return this.getToken(HippolytusParser.WORD, 0);
};

SubjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterSubject(this);
	}
};

SubjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitSubject(this);
	}
};




HippolytusParser.SubjectContext = SubjectContext;

HippolytusParser.prototype.subject = function() {

    var localctx = new SubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, HippolytusParser.RULE_subject);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(HippolytusParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PredicateObjectListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_predicateObjectList;
    return this;
}

PredicateObjectListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateObjectListContext.prototype.constructor = PredicateObjectListContext;

PredicateObjectListContext.prototype.predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PredicateContext);
    } else {
        return this.getTypedRuleContext(PredicateContext,i);
    }
};

PredicateObjectListContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

PredicateObjectListContext.prototype.objectList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectListContext);
    } else {
        return this.getTypedRuleContext(ObjectListContext,i);
    }
};

PredicateObjectListContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.SEMICOLON);
    } else {
        return this.getToken(HippolytusParser.SEMICOLON, i);
    }
};


PredicateObjectListContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterPredicateObjectList(this);
	}
};

PredicateObjectListContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitPredicateObjectList(this);
	}
};




HippolytusParser.PredicateObjectListContext = PredicateObjectListContext;

HippolytusParser.prototype.predicateObjectList = function() {

    var localctx = new PredicateObjectListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, HippolytusParser.RULE_predicateObjectList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.predicate();
        this.state = 288;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.state = 277;
            this.object();
            break;

        case 2:
            this.state = 278;
            this.objectList();
            this.state = 285;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===HippolytusParser.SEMICOLON) {
                this.state = 279;
                this.match(HippolytusParser.SEMICOLON);
                this.state = 280;
                this.predicate();
                this.state = 281;
                this.objectList();
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.WORD = function() {
    return this.getToken(HippolytusParser.WORD, 0);
};

PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitPredicate(this);
	}
};




HippolytusParser.PredicateContext = PredicateContext;

HippolytusParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, HippolytusParser.RULE_predicate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(HippolytusParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_objectList;
    return this;
}

ObjectListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectListContext.prototype.constructor = ObjectListContext;

ObjectListContext.prototype.object = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectContext);
    } else {
        return this.getTypedRuleContext(ObjectContext,i);
    }
};

ObjectListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.COMMA);
    } else {
        return this.getToken(HippolytusParser.COMMA, i);
    }
};


ObjectListContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterObjectList(this);
	}
};

ObjectListContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitObjectList(this);
	}
};




HippolytusParser.ObjectListContext = ObjectListContext;

HippolytusParser.prototype.objectList = function() {

    var localctx = new ObjectListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, HippolytusParser.RULE_objectList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.object();
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HippolytusParser.COMMA) {
            this.state = 293;
            this.match(HippolytusParser.COMMA);
            this.state = 294;
            this.object();
            this.state = 299;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.WORD = function() {
    return this.getToken(HippolytusParser.WORD, 0);
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitObject(this);
	}
};




HippolytusParser.ObjectContext = ObjectContext;

HippolytusParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, HippolytusParser.RULE_object);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this.match(HippolytusParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BiblRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_biblRef;
    return this;
}

BiblRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BiblRefContext.prototype.constructor = BiblRefContext;

BiblRefContext.prototype.BIBL = function() {
    return this.getToken(HippolytusParser.BIBL, 0);
};

BiblRefContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.WORD);
    } else {
        return this.getToken(HippolytusParser.WORD, i);
    }
};


BiblRefContext.prototype.NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.NUM);
    } else {
        return this.getToken(HippolytusParser.NUM, i);
    }
};


BiblRefContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.DOT);
    } else {
        return this.getToken(HippolytusParser.DOT, i);
    }
};


BiblRefContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.DASH);
    } else {
        return this.getToken(HippolytusParser.DASH, i);
    }
};


BiblRefContext.prototype.UNDERSCORE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.UNDERSCORE);
    } else {
        return this.getToken(HippolytusParser.UNDERSCORE, i);
    }
};


BiblRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterBiblRef(this);
	}
};

BiblRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitBiblRef(this);
	}
};




HippolytusParser.BiblRefContext = BiblRefContext;

HippolytusParser.prototype.biblRef = function() {

    var localctx = new BiblRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, HippolytusParser.RULE_biblRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(HippolytusParser.BIBL);
        this.state = 303;
        this.match(HippolytusParser.WORD);
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HippolytusParser.DOT) {
            this.state = 304;
            this.match(HippolytusParser.DOT);
            this.state = 305;
            this.match(HippolytusParser.WORD);
            this.state = 310;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 311;
        this.match(HippolytusParser.NUM);
        this.state = 314;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.DASH) {
            this.state = 312;
            this.match(HippolytusParser.DASH);
            this.state = 313;
            this.match(HippolytusParser.NUM);
        }

        this.state = 317;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.WORD) {
            this.state = 316;
            this.match(HippolytusParser.WORD);
        }

        this.state = 347;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HippolytusParser.UNDERSCORE) {
            this.state = 319;
            this.match(HippolytusParser.UNDERSCORE);
            this.state = 320;
            this.match(HippolytusParser.NUM);
            this.state = 323;
            _la = this._input.LA(1);
            if(_la===HippolytusParser.DASH) {
                this.state = 321;
                this.match(HippolytusParser.DASH);
                this.state = 322;
                this.match(HippolytusParser.NUM);
            }

            this.state = 326;
            _la = this._input.LA(1);
            if(_la===HippolytusParser.WORD) {
                this.state = 325;
                this.match(HippolytusParser.WORD);
            }

            this.state = 342;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 328;
                    this.match(HippolytusParser.DOT);
                    this.state = 329;
                    this.match(HippolytusParser.NUM);
                    this.state = 331;
                    _la = this._input.LA(1);
                    if(_la===HippolytusParser.WORD) {
                        this.state = 330;
                        this.match(HippolytusParser.WORD);
                    }

                    this.state = 338;
                    _la = this._input.LA(1);
                    if(_la===HippolytusParser.DASH) {
                        this.state = 333;
                        this.match(HippolytusParser.DASH);
                        this.state = 334;
                        this.match(HippolytusParser.NUM);
                        this.state = 336;
                        _la = this._input.LA(1);
                        if(_la===HippolytusParser.WORD) {
                            this.state = 335;
                            this.match(HippolytusParser.WORD);
                        }

                    }
             
                }
                this.state = 344;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
            }

            this.state = 349;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CfrRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_cfrRef;
    return this;
}

CfrRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CfrRefContext.prototype.constructor = CfrRefContext;

CfrRefContext.prototype.CFR = function() {
    return this.getToken(HippolytusParser.CFR, 0);
};

CfrRefContext.prototype.NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.NUM);
    } else {
        return this.getToken(HippolytusParser.NUM, i);
    }
};


CfrRefContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.WORD);
    } else {
        return this.getToken(HippolytusParser.WORD, i);
    }
};


CfrRefContext.prototype.DASH = function() {
    return this.getToken(HippolytusParser.DASH, 0);
};

CfrRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterCfrRef(this);
	}
};

CfrRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitCfrRef(this);
	}
};




HippolytusParser.CfrRefContext = CfrRefContext;

HippolytusParser.prototype.cfrRef = function() {

    var localctx = new CfrRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, HippolytusParser.RULE_cfrRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(HippolytusParser.CFR);
        this.state = 351;
        this.match(HippolytusParser.NUM);
        this.state = 353;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
        if(la_===1) {
            this.state = 352;
            this.match(HippolytusParser.WORD);

        }
        this.state = 360;
        _la = this._input.LA(1);
        if(_la===HippolytusParser.DASH) {
            this.state = 355;
            this.match(HippolytusParser.DASH);
            this.state = 356;
            this.match(HippolytusParser.NUM);
            this.state = 358;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
            if(la_===1) {
                this.state = 357;
                this.match(HippolytusParser.WORD);

            }
        }

        this.state = 365;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HippolytusParser.WORD) {
            this.state = 362;
            this.match(HippolytusParser.WORD);
            this.state = 367;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_conds;
    return this;
}

CondsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondsContext.prototype.constructor = CondsContext;

CondsContext.prototype.cond = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CondContext);
    } else {
        return this.getTypedRuleContext(CondContext,i);
    }
};

CondsContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterConds(this);
	}
};

CondsContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitConds(this);
	}
};




HippolytusParser.CondsContext = CondsContext;

HippolytusParser.prototype.conds = function() {

    var localctx = new CondsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, HippolytusParser.RULE_conds);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 368;
            this.cond();
            this.state = 371; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===HippolytusParser.L_CURL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.openCond = function() {
    return this.getTypedRuleContext(OpenCondContext,0);
};

CondContext.prototype.closeCond = function() {
    return this.getTypedRuleContext(CloseCondContext,0);
};

CondContext.prototype.varId = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarIdContext);
    } else {
        return this.getTypedRuleContext(VarIdContext,i);
    }
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitCond(this);
	}
};




HippolytusParser.CondContext = CondContext;

HippolytusParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, HippolytusParser.RULE_cond);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.openCond();
        this.state = 375; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 374;
            this.varId();
            this.state = 377; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HippolytusParser.NOT) | (1 << HippolytusParser.VLTYPE) | (1 << HippolytusParser.VITYPE))) !== 0));
        this.state = 379;
        this.closeCond();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OpenCondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_openCond;
    return this;
}

OpenCondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpenCondContext.prototype.constructor = OpenCondContext;

OpenCondContext.prototype.L_CURL = function() {
    return this.getToken(HippolytusParser.L_CURL, 0);
};

OpenCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterOpenCond(this);
	}
};

OpenCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitOpenCond(this);
	}
};




HippolytusParser.OpenCondContext = OpenCondContext;

HippolytusParser.prototype.openCond = function() {

    var localctx = new OpenCondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, HippolytusParser.RULE_openCond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        this.match(HippolytusParser.L_CURL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_varId;
    return this;
}

VarIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarIdContext.prototype.constructor = VarIdContext;

VarIdContext.prototype.VLTYPE = function() {
    return this.getToken(HippolytusParser.VLTYPE, 0);
};

VarIdContext.prototype.vlId = function() {
    return this.getTypedRuleContext(VlIdContext,0);
};

VarIdContext.prototype.not = function() {
    return this.getTypedRuleContext(NotContext,0);
};

VarIdContext.prototype.VITYPE = function() {
    return this.getToken(HippolytusParser.VITYPE, 0);
};

VarIdContext.prototype.viId = function() {
    return this.getTypedRuleContext(ViIdContext,0);
};

VarIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterVarId(this);
	}
};

VarIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitVarId(this);
	}
};




HippolytusParser.VarIdContext = VarIdContext;

HippolytusParser.prototype.varId = function() {

    var localctx = new VarIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, HippolytusParser.RULE_varId);
    var _la = 0; // Token type
    try {
        this.state = 393;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 384;
            _la = this._input.LA(1);
            if(_la===HippolytusParser.NOT) {
                this.state = 383;
                this.not();
            }

            this.state = 386;
            this.match(HippolytusParser.VLTYPE);
            this.state = 387;
            this.vlId();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 389;
            _la = this._input.LA(1);
            if(_la===HippolytusParser.NOT) {
                this.state = 388;
                this.not();
            }

            this.state = 391;
            this.match(HippolytusParser.VITYPE);
            this.state = 392;
            this.viId();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VlIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_vlId;
    return this;
}

VlIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VlIdContext.prototype.constructor = VlIdContext;

VlIdContext.prototype.NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.NUM);
    } else {
        return this.getToken(HippolytusParser.NUM, i);
    }
};


VlIdContext.prototype.UNDERSCORE = function() {
    return this.getToken(HippolytusParser.UNDERSCORE, 0);
};

VlIdContext.prototype.WORD = function() {
    return this.getToken(HippolytusParser.WORD, 0);
};

VlIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterVlId(this);
	}
};

VlIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitVlId(this);
	}
};




HippolytusParser.VlIdContext = VlIdContext;

HippolytusParser.prototype.vlId = function() {

    var localctx = new VlIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, HippolytusParser.RULE_vlId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395;
        this.match(HippolytusParser.NUM);
        this.state = 396;
        this.match(HippolytusParser.UNDERSCORE);
        this.state = 397;
        this.match(HippolytusParser.NUM);
        this.state = 399;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        if(la_===1) {
            this.state = 398;
            this.match(HippolytusParser.WORD);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ViIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_viId;
    return this;
}

ViIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ViIdContext.prototype.constructor = ViIdContext;

ViIdContext.prototype.NUM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HippolytusParser.NUM);
    } else {
        return this.getToken(HippolytusParser.NUM, i);
    }
};


ViIdContext.prototype.UNDERSCORE = function() {
    return this.getToken(HippolytusParser.UNDERSCORE, 0);
};

ViIdContext.prototype.WORD = function() {
    return this.getToken(HippolytusParser.WORD, 0);
};

ViIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterViId(this);
	}
};

ViIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitViId(this);
	}
};




HippolytusParser.ViIdContext = ViIdContext;

HippolytusParser.prototype.viId = function() {

    var localctx = new ViIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, HippolytusParser.RULE_viId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        this.match(HippolytusParser.NUM);
        this.state = 402;
        this.match(HippolytusParser.UNDERSCORE);
        this.state = 403;
        this.match(HippolytusParser.NUM);
        this.state = 405;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
        if(la_===1) {
            this.state = 404;
            this.match(HippolytusParser.WORD);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_not;
    return this;
}

NotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotContext.prototype.constructor = NotContext;

NotContext.prototype.NOT = function() {
    return this.getToken(HippolytusParser.NOT, 0);
};

NotContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterNot(this);
	}
};

NotContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitNot(this);
	}
};




HippolytusParser.NotContext = NotContext;

HippolytusParser.prototype.not = function() {

    var localctx = new NotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, HippolytusParser.RULE_not);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.match(HippolytusParser.NOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CloseCondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HippolytusParser.RULE_closeCond;
    return this;
}

CloseCondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CloseCondContext.prototype.constructor = CloseCondContext;

CloseCondContext.prototype.R_CURL = function() {
    return this.getToken(HippolytusParser.R_CURL, 0);
};

CloseCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.enterCloseCond(this);
	}
};

CloseCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof HippolytusListener ) {
        listener.exitCloseCond(this);
	}
};




HippolytusParser.CloseCondContext = CloseCondContext;

HippolytusParser.prototype.closeCond = function() {

    var localctx = new CloseCondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, HippolytusParser.RULE_closeCond);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.match(HippolytusParser.R_CURL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.HippolytusParser = HippolytusParser;
